import axios from "axios";
import 'dotenv/config';

const url = process.env.API_URL;

class ModulosControllers {

    async getListaPerfilUsuario(req, res) {
        let { idUsuario, page, pageSize, idMenuPai, idPerfil } = req.query;
        idUsuario = idUsuario ? idUsuario : '';
        idMenuPai = idMenuPai ? idMenuPai : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        idPerfil = idPerfil ? idPerfil : '';

        if (!idUsuario) {
            return res.status(400).json({ error: 'idUsuario não informado' });
        }
        try {
            const apiUrl = `${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs?idUsuario=${idUsuario}&idPerfil=${Number(idPerfil)}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusPorUsuario(req, res) {
        let { idUsuario, idMenuFilho } = req.query;

        idUsuario = idUsuario ? idUsuario : '';
        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        try {
            const apiUrl = `${url}/api/perfilUsuario/menus-usuario-exececao.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusFilhosUsuario(req, res) {
        let { idMenuFilho, idUsuario } = req.query;

        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        idUsuario = idUsuario ? idUsuario : '';
        try {
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenuFilho.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusUsuario(req, res) {
        let { idMenu, idModulo, dsModulo } = req.query;

        idMenu = idMenu ? idMenu : '';
        idModulo = idModulo ? idModulo : '';
        dsModulo = dsModulo ? dsModulo : '';
        try {
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs?idMenu=${idMenu}&idModulo=${idModulo}&dsModulo=${dsModulo}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putPerfilUsuarioMenu(req, res) {
        try {
            let {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            } = req.body

            const response = await axios.put(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            });

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ModulosControllers.putPerfilUsuarioMenu: ", error);
            throw error;
        }
    }

    async postPerfilUsuarioMenu(req, res) {
        try {
            let {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            } = req.body

            const response = await axios.post(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            });

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ModulosControllers.putPerfilUsuarioMenu: ", error);
            throw error;
        }
    }
}

export default new ModulosControllers();
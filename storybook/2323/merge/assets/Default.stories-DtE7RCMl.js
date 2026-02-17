import{j as r}from"./iframe-BwxXT37i.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Dl-kSkvo.js";import{L as m}from"./Link-DIBy7Djl.js";import{H as s}from"./HeaderNavigation-iVdXXcTm.js";import{B as o}from"./Button-BPaKVUIt.js";import{T as p}from"./Text-COIxE5M6.js";import{I as h}from"./Image-D5j7I1C7.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BEASWQ_4.js";import{C as M,M as c}from"./MenuItem-BdKibt1d.js";import{C as I}from"./ContextMenuTrigger-BMQPrhy2.js";import"./ContextMenuSection-DLmcvkG_.js";import{M as T}from"./ModalTrigger-iMs05oZk.js";import{M as k}from"./Modal-Ba2srwlL.js";import{H}from"./Heading-3o8VfDUm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./index-DuE4n7_M.js";import"./remote-DESTNxfj.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./context-CQJLc664.js";import"./utils-CJgL2cA6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Czv-Zofa.js";import"./usePress-Bm2JbU_T.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./dynamic-dswMj1gt.js";import"./LoadingSpinner-C1b88oeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cy0UoRmV.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./useLabel-ClAEan5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Text-CMM9EMAj.js";import"./AlertIcon-DLpjaGh3.js";import"./ActionBatch-BYAp_qkn.js";import"./useOverlayController-Clvgh-dL.js";import"./useStatic-DbyoNtmr.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./Popover-CGrzjmtZ.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./Dialog-B0vuTUBy.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./VisuallyHidden-BP4pgppw.js";import"./Switch-Bw-Ftgxc.js";import"./useFieldComponent-CUBWvnpR.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CU0nZqEv.js";import"./useFormReset-BZECQBSr.js";import"./OverlayTrigger-DDMtWs7A.js";import"./DialogTriggerView-DgNiOD98.js";import"./Overlay-AD1OWyvg.js";import"./ButtonView-BxZPu1tu.js";import"./Flex-DzEskxqa.js";import"./Heading-DQrX8nPA.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};

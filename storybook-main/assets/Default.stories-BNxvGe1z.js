import{j as r}from"./iframe-Ca6Y6Qbd.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-DE1Emhrq.js";import{L as m}from"./Link-C_0R8BFo.js";import{H as s}from"./HeaderNavigation-G3cDsdcP.js";import{B as o}from"./Button-Cmpvhu71.js";import{T as p}from"./Text-BEUemzSa.js";import{I as h}from"./Image-DMRKQczp.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CWMmikpe.js";import{C as M,M as c}from"./ContextMenu-BN3FtodB.js";import{C as I}from"./ContextMenuTrigger-B4AkgpiJ.js";import"./ContextMenuSection-Dxs1x_rP.js";import{a as T,M as k}from"./Modal-DMjmsON-.js";import{H}from"./Heading-CiyOEL28.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./remote-B__m5VQE.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./context-BSVjMcq9.js";import"./utils-CgPiupY7.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./dynamic-CaH7ifbO.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BwNAbkAI.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./useLabel-DSKkVaVQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CbMIui3y.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./AlertIcon-CE0IjQiw.js";import"./Switch-DRcWuuo5.js";import"./useFieldComponent-Drxg4ucu.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C8bfozUY.js";import"./useFormReset-QXLzcWbc.js";import"./useControlledState-CsFJYMR6.js";import"./VisuallyHidden-DA0DNDbd.js";import"./Dialog-B1e_uHMT.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./Action-BHbL3yoQ.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./getActionGroupSlot-DZQMPipw.js";import"./Popover-DUAQfyPS.js";import"./useOverlayController-D-zjYsKH.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./OverlayTrigger-ONQN5d76.js";import"./DialogTriggerView-B6u8zdXJ.js";import"./Overlay-DcwbhLnS.js";import"./ButtonView-BtrfQFVi.js";import"./Flex-BoiWE4N9.js";import"./Heading-CtfKFM99.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};

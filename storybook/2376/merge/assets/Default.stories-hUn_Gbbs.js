import{j as r}from"./iframe-DlWpeVbs.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CwuMGyll.js";import{L as m}from"./Link-CdN37rAD.js";import{H as s}from"./HeaderNavigation-BtfZG5sK.js";import{B as o}from"./Button-OB72uiKS.js";import{T as p}from"./Text-BjwiRmws.js";import{I as h}from"./Image-CzCha_Up.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DUtivJUf.js";import{C as M,M as c}from"./MenuItem-BewYp1Rk.js";import{C as I}from"./ContextMenuTrigger-C_Pl5-jO.js";import"./ContextMenuSection-BiNqDgyA.js";import{M as T}from"./ModalTrigger-DafGiAjv.js";import{M as k}from"./Modal-O25jLubx.js";import{H}from"./Heading-BJuxWHmq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./index-Ci0KQ92C.js";import"./remote-Hfn3BG4Y.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./context-w6Z3dllt.js";import"./utils-BWqiCJWQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DZ2sW_Jx.js";import"./usePress-CW_WdW_p.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./dynamic-D3tAnWym.js";import"./LoadingSpinner-C6D9eT_m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BH6lR-Fb.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./useLabel-BQqcwX0K.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CHTiPLC9.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Text-BEVTNZ1h.js";import"./AlertIcon-DyJmeCBc.js";import"./ActionBatch-C-ID7iPf.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./getActionGroupSlot-bYWxcQao.js";import"./Popover-C0He_Yr4.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./Dialog-DM93NPwE.js";import"./RSPContexts-8MG42HPe.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";import"./Switch-7okJ4e96.js";import"./useFieldComponent-CpDSJ5w8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-1KoeNqQn.js";import"./useFormReset-CZgOMFUA.js";import"./OverlayTrigger-hKGFSF4k.js";import"./DialogTriggerView-BzKacm2d.js";import"./Overlay-DA629dSj.js";import"./ButtonView-BEjF0cHe.js";import"./Flex-DFZNaOVm.js";import"./Heading-DCdSeC1b.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

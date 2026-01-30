import{j as r}from"./iframe-DSXKf9Qs.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CsaNdeaY.js";import{L as m}from"./Link-_tEGPnTm.js";import{H as s}from"./HeaderNavigation-cj5iBb01.js";import{B as o}from"./Button-D9RPwGO-.js";import{T as p}from"./Text-C7KW9wgf.js";import{I as h}from"./Image-IRdGGlCW.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Seq1LI3C.js";import{C as M,M as c}from"./MenuItem-vtvu40WS.js";import{C as I}from"./ContextMenuTrigger-VpYXiR_k.js";import"./ContextMenuSection-8AZZSNKN.js";import{a as T,M as k}from"./Modal-BFa-87Oe.js";import{H}from"./Heading-CyZwRqCp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./index-xIXPquhv.js";import"./remote-Gy-Ku51P.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./context-DU2DYbHB.js";import"./utils-BkNrSrSW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BkCMpCSs.js";import"./usePress-D3-3tpV2.js";import"./useFocusRing-9tutEJo4.js";import"./useFocusable-BiabYp81.js";import"./dynamic-waHTXRlt.js";import"./LoadingSpinner-CM9ywy6H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DD62R7IC.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./useLabel-D2CXizlL.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-zi1f_NHh.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./AlertIcon-Bx5_fWVD.js";import"./Action-D8TvePO3.js";import"./context-CiYX6UJF.js";import"./useStatic-CLatwN1t.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./Popover-jJwFFzdg.js";import"./useOverlayController-C4MSz-T2.js";import"./OverlayContextProvider-BrBwXgQ3.js";import"./Dialog-Dgijbiav.js";import"./RSPContexts-C47t6iqA.js";import"./OverlayArrow-wV4le4-P.js";import"./useControlledState-C8VBbj0I.js";import"./Collection-Bm0CT5e0.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./SelectionIndicator-BtJjQV2B.js";import"./Separator-BRbgnZrd.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./useCollator-dJhHztcY.js";import"./FocusScope-C1tZWIaN.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./Switch-Dvkclx_V.js";import"./useFieldComponent-CCab4n06.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-9MhzwE3d.js";import"./useFormReset-CY4Zdzy9.js";import"./OverlayTrigger-DEiWUU1J.js";import"./DialogTriggerView-ChcKhYZV.js";import"./Overlay-BFf7R0E1.js";import"./ButtonView-d2J1OyEz.js";import"./Flex-07vqiTlR.js";import"./Heading-ChWDXA_z.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

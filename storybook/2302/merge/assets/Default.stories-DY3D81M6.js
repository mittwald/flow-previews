import{j as r}from"./iframe-C-IsL8qN.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Dgpqm1wd.js";import{L as m}from"./Link-Bv7hTzVt.js";import{H as s}from"./HeaderNavigation-BxNrmCVM.js";import{B as o}from"./Button-CjTDs8dt.js";import{T as p}from"./Text-zEwe4Yc5.js";import{I as h}from"./Image-DsfHBIJV.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DxbDv-Tu.js";import{C as M,M as c}from"./MenuItem-m3M9aA1C.js";import{C as I}from"./ContextMenuTrigger-FKBCTptq.js";import"./ContextMenuSection-Bkmt90BD.js";import{a as T,M as k}from"./Modal-C0GPgtl8.js";import{H}from"./Heading-DSZIHu00.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./index-foeybvdq.js";import"./remote-HwzzztjA.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./context-D_ogfP81.js";import"./utils-CdIT7ixS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-NxQ40LWx.js";import"./usePress-Bg3iVugG.js";import"./useFocusRing-DAQnos8V.js";import"./useFocusable-9aQ0aONO.js";import"./dynamic-Bim1MLHd.js";import"./LoadingSpinner-DNWLy5dx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dm6X_wGa.js";import"./ProgressBar-ZcSeAule.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./useLabel-C05pQW9y.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Dh90zeJL.js";import"./EmulatedBoldText-CbJEOPDL.js";import"./Text-CQAUJHD3.js";import"./AlertIcon-Dd6PrMrE.js";import"./Action-B0w4MF16.js";import"./context-DP3SZV7v.js";import"./useStatic-D3Nt3l-7.js";import"./getActionGroupSlot-BxXNcZ2R.js";import"./Popover-DCVoYnRB.js";import"./useOverlayController-BD3uXW3f.js";import"./OverlayContextProvider-BRD-Zchx.js";import"./Dialog-DhruM_-_.js";import"./RSPContexts-dApRMb3S.js";import"./OverlayArrow-Bm7lykW0.js";import"./useControlledState-D6WUL5XM.js";import"./Collection-BO8FiyTI.js";import"./CollectionBuilder-D--x571F.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./Separator-BkJE4Q3g.js";import"./SelectionManager-tiaDTVEq.js";import"./useEvent-BSeSfGFl.js";import"./useCollator-CUcFaXNY.js";import"./FocusScope-DMp-Wrqn.js";import"./VisuallyHidden-B09yhrQ-.js";import"./Switch-BBJIBEAJ.js";import"./useFieldComponent-neJhoipE.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BEu0Fgym.js";import"./useFormReset-ovy8PPed.js";import"./OverlayTrigger-emDMmbR-.js";import"./DialogTriggerView-DxY66ab5.js";import"./Overlay-DPjMcAMg.js";import"./ButtonView-B6yYdM6G.js";import"./Flex-DqHUmcVV.js";import"./Heading-BOaxUh_X.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

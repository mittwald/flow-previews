import{j as r}from"./iframe-BzN-GDSV.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Dq5gBH8b.js";import{L as m}from"./Link-sh3DNgUl.js";import{H as s}from"./HeaderNavigation-daBH6_q4.js";import{B as o}from"./Button-CqLQCx50.js";import{T as p}from"./Text-w8Xk5tzh.js";import{I as h}from"./Image-BRD7rL9w.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C4kxR4RW.js";import{C as M,M as c}from"./MenuItem-DfaL74tp.js";import{C as I}from"./ContextMenuTrigger-c7hKzxRh.js";import"./ContextMenuSection-Fnzuskm8.js";import{a as T,M as k}from"./Modal-CSfOgxiS.js";import{H}from"./Heading-_0-NRbck.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./index-jqMu6fsr.js";import"./remote-DmyBa_Y3.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./context-CV01TaOS.js";import"./utils-DZiSZNRH.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CD9nXzJ_.js";import"./usePress-CKBw2syN.js";import"./useFocusRing-DeK7XLS9.js";import"./useFocusable-CZxxukff.js";import"./dynamic-CBHHoCBf.js";import"./LoadingSpinner-DwhPZLF8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTrxkMff.js";import"./ProgressBar-BhNLuOhb.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./useLabel-D4-tvGJV.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BZan5p2Q.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Text-9Slz249r.js";import"./AlertIcon-CN2JBdj6.js";import"./Action-DMSKmOJg.js";import"./context-CO_pcEBI.js";import"./useStatic-BCK3u9CD.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./Popover-DxjLrjat.js";import"./useOverlayController-CQvNW7BN.js";import"./OverlayContextProvider-LhIWYE9-.js";import"./Dialog-D-_l-Dz2.js";import"./RSPContexts-836Xa0kI.js";import"./OverlayArrow-45O3XaxD.js";import"./useControlledState-VicJRSad.js";import"./Collection-Ckv3RK5p.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./SelectionIndicator-Clnr_8iz.js";import"./Separator-grnmoeTC.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./VisuallyHidden-DwmcGrU0.js";import"./Switch-D9xZcKsm.js";import"./useFieldComponent-DWIvkE7m.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-FvSvnnqY.js";import"./useFormReset-C_nKv_ku.js";import"./OverlayTrigger-DARUzxHp.js";import"./DialogTriggerView-BzajkU89.js";import"./Overlay-PclI4YAX.js";import"./ButtonView-GH3X29hF.js";import"./Flex-CkTwC_vI.js";import"./Heading-Cy7B52s5.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

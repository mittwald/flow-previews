import{j as r}from"./iframe-DnKh_q8B.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-C-jbuAIx.js";import{L as m}from"./Link-Df-ZNa8o.js";import{H as s}from"./HeaderNavigation-Da-soeDa.js";import{B as o}from"./Button-B6Zpw5yd.js";import{T as p}from"./Text-Drd9GdLo.js";import{I as h}from"./Image-1Rmm2y25.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BEha-8nw.js";import{C as M,M as c}from"./MenuItem-pzkZpSAZ.js";import{C as I}from"./ContextMenuTrigger-Bq0JAmU0.js";import"./ContextMenuSection-CPEZCChP.js";import{a as T,M as k}from"./Modal-Bh0-AiW1.js";import{H}from"./Heading-CB01boQE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./index-B5PweBHP.js";import"./remote-k0GnUd79.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./utils-BZc8lNcd.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BUIY7lOc.js";import"./usePress-CFc3C1mq.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocusable-z3KWK7qq.js";import"./dynamic-BE_n_a5m.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./useLabel-jAJMJRpZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BUa4T4SN.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./AlertIcon-3p_Y3XqS.js";import"./Action-B5Uq12lQ.js";import"./context-CSnl0IXM.js";import"./useStatic-DlxvzgyM.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./Popover-BSQWc1mY.js";import"./useOverlayController-BFPbq2tX.js";import"./OverlayContextProvider-DSTl-nzt.js";import"./Dialog-CHY6jywx.js";import"./RSPContexts-wuQtf2CN.js";import"./OverlayArrow-2vICfEm4.js";import"./useControlledState-Dx9tzWN_.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./VisuallyHidden-DfZCukwF.js";import"./Switch-BVZiks4P.js";import"./useFieldComponent-ClvUady3.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bu3ZhahO.js";import"./useFormReset-BbinXmMH.js";import"./OverlayTrigger-jX4CJ8wH.js";import"./DialogTriggerView-Dgu_7owx.js";import"./Overlay-CSNlzHah.js";import"./ButtonView-DGagadkt.js";import"./Flex-BcyNSB4N.js";import"./Heading-BwaoBSXr.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

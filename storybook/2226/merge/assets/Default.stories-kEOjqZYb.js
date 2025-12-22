import{j as r}from"./iframe-ChVCZzSM.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-DiIA_Kv4.js";import{L as m}from"./Link-CSdvxU5f.js";import{H as s}from"./HeaderNavigation-H5oz3yLA.js";import{B as o}from"./Button-DDsnJhyb.js";import{T as p}from"./Text-CDV1KOVg.js";import{I as h}from"./Image-BG8dtFh9.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D9unXc2w.js";import{C as M,M as c}from"./MenuItem-BDMAibUs.js";import{C as I}from"./ContextMenuTrigger-FQbwYITD.js";import"./ContextMenuSection-CMrkKIyN.js";import{a as T,M as k}from"./Modal-DkFCi_xv.js";import{H}from"./Heading-DGiEIOEA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./index-B17aiXwm.js";import"./remote-B9ld2KSn.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./context-DJbicbqJ.js";import"./utils-D2Dbeo4Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DJQIPi1Q.js";import"./useFocus-D0NBuExq.js";import"./useFocusRing-BKxozeV4.js";import"./useFocusable-DqNAAmsp.js";import"./dynamic-M4vO8Oa6.js";import"./LoadingSpinner-CIFEKnPX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQvyXKNx.js";import"./ProgressBar-Cxzv2Khu.js";import"./Label-B7WWEN6i.js";import"./Hidden-CmNYW2sS.js";import"./useLabel-DQfYHHHP.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Drl1pS0o.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./Text-JkP9a4Kb.js";import"./AlertIcon-D4mG0jAW.js";import"./Action-BtwaxeJT.js";import"./context-5fKqnWzS.js";import"./useStatic-DfTrwEFp.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./Popover-ClCmnZ4N.js";import"./useOverlayController-DK3_Ky4D.js";import"./OverlayContextProvider-r_uJzIjb.js";import"./Dialog-BaNJO3_y.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./VisuallyHidden-DGYqp_5z.js";import"./Switch-BLswQlcf.js";import"./useFieldComponent--rNpfgQ4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CWiEEZ7L.js";import"./useFormReset-BrkbasLl.js";import"./OverlayTrigger-v4LHk93w.js";import"./DialogTriggerView-J9VojhfB.js";import"./Overlay-1LxbuBK8.js";import"./ButtonView-ERTDXvRy.js";import"./Flex-BovjNN7z.js";import"./Heading-DVvsLghH.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};

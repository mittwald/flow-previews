import{j as r}from"./iframe-Dq6d4A4K.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CufYr70B.js";import{L as m}from"./Link-BVUJERgb.js";import{H as s}from"./HeaderNavigation-Bju6LoI2.js";import{B as o}from"./Button-CRlV5nO0.js";import{T as p}from"./Text-0vHLnm-v.js";import{I as h}from"./Image-DD5FCYwO.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BbzK9ikq.js";import{C as M,M as c}from"./MenuItem-E6Y_F7xN.js";import{C as I}from"./ContextMenuTrigger-CCOwNKBh.js";import"./ContextMenuSection-CAGjVTCl.js";import{a as T,M as k}from"./Modal-CF3aNW_W.js";import{H}from"./Heading-fRiF7ARa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./index-cJyKvq7H.js";import"./remote-9zlx4mlg.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./context-Dane2eIN.js";import"./utils-JgkAdQlm.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BTTZyaX9.js";import"./useFocus-CdRm64Xm.js";import"./useFocusRing-HiCcztDi.js";import"./useFocusable-SW4CEV0n.js";import"./dynamic-D3ex2ST8.js";import"./LoadingSpinner-C8xohBci.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJxkILn0.js";import"./ProgressBar-C4xOfrMO.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./useLabel-wLk1TVQc.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DRZjKHqy.js";import"./EmulatedBoldText-D7VkYRRX.js";import"./Text-BYQ1lWMY.js";import"./AlertIcon-BoXjI6hb.js";import"./Action-BH5FUwcy.js";import"./context-Cu2JCu7X.js";import"./useStatic-qDMUdwgV.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./Popover-Dhm-UcrA.js";import"./useOverlayController-C30vz3f6.js";import"./OverlayContextProvider-CIowSog5.js";import"./Dialog-D4b1JxJ9.js";import"./RSPContexts-CrxTMHNd.js";import"./OverlayArrow-CZpwCw1e.js";import"./useControlledState-B_V0UpKw.js";import"./Collection-CUuQgOW5.js";import"./CollectionBuilder-BBsN2d06.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./Separator-DMKKn_KL.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./useCollator-B5JOOy1t.js";import"./FocusScope-Bbcwxc4u.js";import"./VisuallyHidden-DiG4H0lP.js";import"./Switch-CxzPrStY.js";import"./useFieldComponent-lf4P9InL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D9jY008e.js";import"./useFormReset-D6HDlpz3.js";import"./OverlayTrigger-Coxo9lqL.js";import"./DialogTriggerView-DOKTd9Fn.js";import"./Overlay-CeOtgcoC.js";import"./ButtonView-CpiXtfU3.js";import"./Flex-BaUaIQ0b.js";import"./Heading-jVMpSXwt.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

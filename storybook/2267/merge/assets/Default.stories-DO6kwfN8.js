import{j as r}from"./iframe-B_VLmVOf.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-COj126FB.js";import{L as m}from"./Link-CcdFK-i8.js";import{H as s}from"./HeaderNavigation-ChS7CZsm.js";import{B as o}from"./Button-Bx9uZJMk.js";import{T as p}from"./Text-DLyTxpXl.js";import{I as h}from"./Image-CNmc7xSc.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CUJWVHuI.js";import{C as M,M as c}from"./ContextMenu-468WFC8g.js";import{C as I}from"./ContextMenuTrigger-CJxU4qkN.js";import"./ContextMenuSection-Bn3YLQv6.js";import{a as T,M as k}from"./Modal-C5Rg6i74.js";import{H}from"./Heading-CnR3VTEF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./index-Cpfd6Pim.js";import"./remote-D8h-jp0X.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./context-x63-ahNn.js";import"./utils-C3gFrn3p.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-dvDnySA_.js";import"./useFocus-BThPJxs2.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./dynamic-BPLgH_zA.js";import"./LoadingSpinner-8NlAwzA_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-sEz_Ftmo.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./useLabel-3m37nTep.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BI-ei-gA.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./Text-Cz72Ll4P.js";import"./AlertIcon-CQ3Ik0rE.js";import"./Switch-DVX1qJIv.js";import"./useFieldComponent-CG-gR-7X.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CVL98gOE.js";import"./useFormReset-DzSH81mS.js";import"./useControlledState-Cy2UyDQ-.js";import"./VisuallyHidden-neYV3Owd.js";import"./Dialog-B23HRyeo.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./Action-Ct3jXlr4.js";import"./context-DKzx1USb.js";import"./useStatic-Ch5ZGK2l.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./Popover-4LrwwwQo.js";import"./useOverlayController-C5Zlkgph.js";import"./OverlayContextProvider-BI7L_fxB.js";import"./OverlayTrigger-r-EuZvmq.js";import"./DialogTriggerView-GLdM8JEW.js";import"./Overlay-BfEY1GPL.js";import"./ButtonView-WUiEtFbg.js";import"./Flex-Cc8jtLcB.js";import"./Heading-CCNcjRWR.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

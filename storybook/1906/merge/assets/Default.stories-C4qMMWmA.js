import{j as r}from"./iframe-B9oS1eAm.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CbErselp.js";import{L as m}from"./Link-C446LboO.js";import{H as s}from"./HeaderNavigation-CXh5bhc1.js";import{B as o}from"./Button-DYAI_N0q.js";import{T as p}from"./Text-D9DZPtYx.js";import{I as h}from"./Image-BxuIIBje.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DZjFE8dC.js";import{C as M,M as c}from"./MenuItem-BYb2dHPC.js";import{C as I}from"./ContextMenuTrigger-998pkbRQ.js";import"./ContextMenuSection-B77fxBO-.js";import{a as T,M as k}from"./Modal-Cb0ZVDBV.js";import{H}from"./Heading-DxBk4dsC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./index-CYuWkd4j.js";import"./remote-B89JZTQ6.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./context-CSGUwiAp.js";import"./utils-CkbQ6lDO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BUMqhqrN.js";import"./usePress-CvAqmGGe.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./dynamic-D5cDPq7G.js";import"./LoadingSpinner-BCe3g54S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCaEF3RH.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./useLabel-CLQlKL9C.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DuZ3LDHb.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Text-DSVxOKBO.js";import"./AlertIcon-CyL6LR1b.js";import"./Action-uBGtkJG1.js";import"./context-CJJiwCXZ.js";import"./useStatic-D0W9io-P.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./Popover-YwALvm8D.js";import"./useOverlayController-kt2fLXEJ.js";import"./OverlayContextProvider-B6Y-y8F0.js";import"./Dialog-DQxs1UCg.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./VisuallyHidden-D5FMvG_d.js";import"./Switch-CiJLnGSM.js";import"./useFieldComponent-BBgwgWHq.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C-ch0RgL.js";import"./useFormReset-CfNbS0Tm.js";import"./OverlayTrigger-BbXRNnL7.js";import"./DialogTriggerView-T7ydPhJ_.js";import"./Overlay-T66XMssq.js";import"./ButtonView-BFgeb-7u.js";import"./Flex-DJXnaoSq.js";import"./Heading-DFJD7l83.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

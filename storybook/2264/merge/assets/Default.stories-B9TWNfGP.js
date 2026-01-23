import{j as r}from"./iframe-CL_XwmGn.js";import{u as d,a1 as l,_ as g,y as u,a2 as x}from"./IconWarning-BJDkWSaD.js";import{L as m}from"./Link-DMWmmK_7.js";import{H as s}from"./HeaderNavigation-vvFdt1ez.js";import{B as o}from"./Button-D2VcFxMo.js";import{T as p}from"./Text-D6CnWJI6.js";import{I as h}from"./Image-EBYxMThd.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-B5uvKPRV.js";import{C as M,M as c}from"./MenuItem-DPMv623a.js";import{C as I}from"./ContextMenuTrigger-D2AjW2qO.js";import"./ContextMenuSection-6x7QO-B2.js";import{a as T,M as k}from"./Modal-D8t1tajv.js";import{H}from"./Heading-DNlihVQQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./remote-vDvbK7RM.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./utils-pMOpDdKA.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./dynamic-qzGoZAaQ.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CWqxXJtj.js";import"./ProgressBar-CwwrTQ5U.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./useLabel-OokI145l.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BUAGSuau.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./AlertIcon-DT_6S455.js";import"./Action-BeuDPcZa.js";import"./context-C4d2ZO_d.js";import"./useStatic-KIt4AINJ.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./Popover-DNdwUWwE.js";import"./useOverlayController-BHc_huao.js";import"./OverlayContextProvider-DerEZw4j.js";import"./Dialog-BknS8Hxj.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";import"./Switch-BkR023WA.js";import"./useFieldComponent-CJlPbBit.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DwKPGjTG.js";import"./useFormReset-Dt36AuVA.js";import"./OverlayTrigger-2Lg8C4JA.js";import"./DialogTriggerView-Dt6C6eBY.js";import"./Overlay-yZpjSRqc.js";import"./ButtonView-zVtNa1QW.js";import"./Flex-CURAi83u.js";import"./Heading-CAyFlpGN.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DiUxw81Q.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DJftz4M-.js";import{L as m}from"./Link-HMWkYJE0.js";import{H as s}from"./HeaderNavigation-DIcbg5dV.js";import{B as o}from"./Button-gnRq8NvL.js";import{T as p}from"./Text-CMit6jNZ.js";import{I as h}from"./Image-hYG4mG5o.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DAQwFke9.js";import{C as M,M as c}from"./MenuItem-Eheb_sFR.js";import{C as I}from"./ContextMenuTrigger-BGyqLqJa.js";import"./ContextMenuSection-CCmic__u.js";import{a as T,M as k}from"./Modal-BPbf4xBY.js";import{H}from"./Heading-CaLCe_nK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./index-2ROVwQvu.js";import"./remote-dRe2-fx5.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./context-si8TSn1j.js";import"./utils-BhADjK-H.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DSwjHrh5.js";import"./usePress-I-WC2YFt.js";import"./useFocusRing-BpbrWv_K.js";import"./useFocusable-bbwyacvB.js";import"./dynamic-Bvqmautb.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JQtyulyF.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./useLabel-yn1VwYEU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DhblGL2Q.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./AlertIcon-C_aBYmlN.js";import"./Action-D_TEMwel.js";import"./context-C7B1j1st.js";import"./useStatic-BoyD6q7D.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./Popover-BGTnePiJ.js";import"./useOverlayController-BsSpthcM.js";import"./OverlayContextProvider-Bc9SHXiU.js";import"./Dialog-CJTGGTvx.js";import"./RSPContexts-D4TaMXlQ.js";import"./OverlayArrow-BBITTnz5.js";import"./useControlledState-DDLUXLOw.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./Switch-D5AUOQzr.js";import"./useFieldComponent-BFiXxBQU.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BEtMbK80.js";import"./useFormReset-Cz-LaBzR.js";import"./OverlayTrigger-BHAm2bRH.js";import"./DialogTriggerView-CtlSSZYP.js";import"./Overlay-CslFZDOW.js";import"./ButtonView-DRbY-aON.js";import"./Flex-CXNmh-Gy.js";import"./Heading-BfJy_wN2.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

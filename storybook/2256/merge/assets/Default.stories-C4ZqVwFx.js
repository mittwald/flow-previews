import{j as r}from"./iframe-D2BYf5-g.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BvAkc2LD.js";import{L as m}from"./Link-CxhSDjOE.js";import{H as s}from"./HeaderNavigation-7YDALvke.js";import{B as o}from"./Button-CDOjETwV.js";import{T as p}from"./Text-D6N8Heh9.js";import{I as h}from"./Image-D58Uzmyn.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BsA3jrpg.js";import{C as M,M as c}from"./ContextMenu-Cn4VIt-t.js";import{C as I}from"./ContextMenuTrigger-DJASepmI.js";import"./ContextMenuSection-CMECFzdV.js";import{a as T,M as k}from"./Modal-CC0QZxrn.js";import{H}from"./Heading-BGLuRqOh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./index-Bu8wVR5j.js";import"./remote-C9AuEG_9.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./context-DWMR9XE1.js";import"./utils-DHZ51AFQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-wVuL2i-g.js";import"./useFocus-ORvRv07U.js";import"./useFocusRing-DGJLUvQM.js";import"./useFocusable-BL0hS6to.js";import"./dynamic-DsmNOmMb.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DuBdlowL.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./useLabel-DtwWh7yV.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CRHYBb-w.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./AlertIcon-LWJoxW2P.js";import"./Switch-BTiF-pTz.js";import"./useFieldComponent-BFOdLrJ8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B2YKD4zK.js";import"./useFormReset-Dqz1EECq.js";import"./useControlledState-fyUF26L0.js";import"./VisuallyHidden-DcwEctQc.js";import"./Dialog-DmGaLGl4.js";import"./RSPContexts-Jo-zwAyH.js";import"./OverlayArrow-BMVG_KsN.js";import"./Collection-DwLf4j5H.js";import"./CollectionBuilder-BdJbggOI.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./Separator-C-Im4RIH.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./Action-DS_mMLiR.js";import"./context-DatNKEIi.js";import"./useStatic-DA3fGq-b.js";import"./getActionGroupSlot-DYtozdko.js";import"./Popover-xYzPuiR6.js";import"./useOverlayController-CdWYn5_T.js";import"./OverlayContextProvider-ddiXR-PL.js";import"./OverlayTrigger-BR1gsJaD.js";import"./DialogTriggerView-BxLYgvuO.js";import"./Overlay-CSrIbdEU.js";import"./ButtonView-DYIjeFD7.js";import"./Flex-BBeWMg7v.js";import"./Heading-DOzmXv5U.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

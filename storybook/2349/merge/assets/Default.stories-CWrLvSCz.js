import{j as r}from"./iframe-gtGtPSGX.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BtUUciVj.js";import{L as m}from"./Link-DAYvgODO.js";import{H as s}from"./HeaderNavigation-GexXp3rR.js";import{B as o}from"./Button-CvhKZeTQ.js";import{T as p}from"./Text-QzTdDFQg.js";import{I as h}from"./Image-1XMwESyI.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BL2jrYvb.js";import{C as M,M as c}from"./MenuItem-BfrZ4vbA.js";import{C as I}from"./ContextMenuTrigger-D1jiwTPQ.js";import"./ContextMenuSection-CDCzjc8m.js";import{M as T}from"./ModalTrigger-CxVrgbNw.js";import{M as k}from"./Modal-d042eYeA.js";import{H}from"./Heading-DqsWSEZ3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./remote-DGcAtBID.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./utils-1b_KoCGs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BGYZap87.js";import"./usePress-ub7fcIm5.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./dynamic-CLlIyxqz.js";import"./LoadingSpinner-DnqSg6_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./useLabel-BqGs6HWh.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./AlertIcon-BrLsNTwF.js";import"./ActionBatch-C6WY1Daf.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./Popover-C2tFcXbP.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./Dialog-_BBlF040.js";import"./RSPContexts-L8MWaJ6n.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./Switch-cVJrthqZ.js";import"./useFieldComponent-BaX-M8wV.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CNroCGEj.js";import"./useFormReset-TvJ_gIa-.js";import"./OverlayTrigger-CmRNrsxN.js";import"./DialogTriggerView-DGaEeiVP.js";import"./Overlay-CLrFplCq.js";import"./ButtonView-VtGuDE6z.js";import"./Flex-D8ogRMIF.js";import"./Heading-BlK6Cy5i.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

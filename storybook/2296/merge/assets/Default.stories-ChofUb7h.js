import{j as r}from"./iframe-CcNHCKoB.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DmrAmEd1.js";import{L as m}from"./Link-DHksZfNS.js";import{H as s}from"./HeaderNavigation-OTfaKOrL.js";import{B as o}from"./Button-DTuLbClr.js";import{T as p}from"./Text-BmtlE-88.js";import{I as h}from"./Image-BtKKNgUs.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CWNhDZd8.js";import{C as M,M as c}from"./MenuItem-Cw_6P02w.js";import{C as I}from"./ContextMenuTrigger-BgU6AkIr.js";import"./ContextMenuSection-mqwvvgq0.js";import{a as T,M as k}from"./Modal-CQ5V-wJs.js";import{H}from"./Heading-BmMG8Nl6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./remote-CVy042JL.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./utils-NnqZ9ZBK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-SYOVVSYu.js";import"./usePress-eyc-LVl-.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";import"./dynamic-nNoo79J6.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./AlertIcon-DM6j3Z28.js";import"./Action-XHgAr--T.js";import"./context-QFR9DY6D.js";import"./useStatic-BA9Xyuh5.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./Popover-DCHOI3I3.js";import"./useOverlayController-CQ8vHMbT.js";import"./OverlayContextProvider-B8m7VzcE.js";import"./Dialog-DlflAgwc.js";import"./RSPContexts-DYw5y0O9.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./Switch-CpasZexj.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DMv-HDsl.js";import"./useFormReset-CUbMVBNo.js";import"./OverlayTrigger-Ct6yrdj2.js";import"./DialogTriggerView-CHtTqNOy.js";import"./Overlay-CAK1m899.js";import"./ButtonView-BSq0RN-i.js";import"./Flex-DWPkK-la.js";import"./Heading-CN6CrwNC.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

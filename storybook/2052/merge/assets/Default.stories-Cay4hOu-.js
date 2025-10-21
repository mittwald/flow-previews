import{j as r}from"./iframe-BziZnbbf.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-CJvxfsrj.js";import{L as m}from"./Link-C7g_Q3l-.js";import{H as s}from"./HeaderNavigation-DQz8eK75.js";import{B as o}from"./Button-BsOsKcj7.js";import{T as p}from"./Text-C2tTVpcM.js";import{I as h}from"./Image-DkTbH88u.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BkRhGUao.js";import{C as M,M as c}from"./MenuItem-Dzje33bv.js";import{C as I}from"./ContextMenuTrigger-CSW02B1r.js";import"./ContextMenuSection-DQ1qfDRr.js";import{a as T,M as k}from"./Modal-CNofshNU.js";import{H}from"./Heading-HaPqK-C-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./index-_EM7mgZk.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./utils-C0RTyIHD.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-D5emiALM.js";import"./useFocus-ycXwMZE-.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./dynamic-BFzO3wyN.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Czn71cHm.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./useLabel-fjbW-LOk.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BTvp61GS.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./AlertIcon-B2iVBABv.js";import"./Action-CnCRBxQU.js";import"./context-OFPqHilR.js";import"./useStatic-D6NPOV-R.js";import"./getActionGroupSlot-CSQVqoba.js";import"./Popover-CvdxzmgB.js";import"./useOverlayController-C_s7Psi1.js";import"./OverlayContextProvider-W-vbnOir.js";import"./Dialog-DGrVuAqN.js";import"./RSPContexts-CRnpb7uM.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";import"./ClearPropsContextView-DtS_ulKQ.js";import"./ClearPropsContext-DUOPbXiH.js";import"./Switch-CdSeU6yu.js";import"./useFieldComponent-yHiwdZcU.js";import"./react-children-utilities-gpYjsLoV.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BDpn2_Dk.js";import"./useToggleState-DifH9MCn.js";import"./useFormReset-CzU-0SyG.js";import"./OverlayTrigger-BKJFJ3Ty.js";import"./ControlledNotification-uyFkqfCW.js";import"./DialogTriggerView-C6Dg60i3.js";import"./Overlay-CZYgH7CC.js";import"./ButtonView-luCCUYLc.js";import"./Heading-CCWr2xNb.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};

import{j as r}from"./iframe-C3YinX3s.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-6TASCfRR.js";import{L as m}from"./Link-CZlnRLHJ.js";import{H as s}from"./HeaderNavigation-uNkDa8zc.js";import{B as o}from"./Button-B9MewrUz.js";import{T as p}from"./Text-40KOd3GJ.js";import{I as h}from"./Image-CE2u6QKq.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BLONz5y5.js";import{C as M,M as c}from"./MenuItem-Cs1-I0R3.js";import{C as I}from"./ContextMenuTrigger-D3c7IQEW.js";import"./ContextMenuSection-ko5_btdi.js";import{a as T,M as k}from"./Modal-BlLGDFh5.js";import{H}from"./Heading-BWuvehcD.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./index-BppZCGPZ.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./context-XadyItFl.js";import"./utils-CkQtaKCN.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CEE7eirG.js";import"./useFocus-DuIK45_5.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocusable-Cpx8bVI7.js";import"./dynamic-BlWCyvfa.js";import"./LoadingSpinner-BiveWKkE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBEcZBzR.js";import"./ProgressBar-DHxU0Tpr.js";import"./Label-uL4LTRYY.js";import"./Hidden-RtymAw99.js";import"./useLabel-6oysTp78.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DlgIuTl3.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Text-2o-hGpxv.js";import"./AlertIcon-Byy9-PrH.js";import"./Action-DH4q3DMK.js";import"./context-C6PcGqQE.js";import"./useStatic-K2T119cA.js";import"./getActionGroupSlot-DrHtarua.js";import"./Popover-CtJvJUtO.js";import"./useOverlayController-DQ84rk2f.js";import"./OverlayContextProvider-BLqueKvq.js";import"./Dialog-CifFL37q.js";import"./RSPContexts-DbIyirJn.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useControlledState-DTNxqflL.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./VisuallyHidden-Bah8oUIC.js";import"./ClearPropsContextView-j5diIoDW.js";import"./ClearPropsContext-CJ1szkV5.js";import"./Switch-gKtTEvHi.js";import"./useFieldComponent-unfYr68o.js";import"./react-children-utilities-Tlnpa_z4.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-DG0DAth_.js";import"./useToggleState-DxJyq5N8.js";import"./useFormReset-BgD1M5By.js";import"./OverlayTrigger-CcK_N3rx.js";import"./ControlledNotification-8cMq_6Ir.js";import"./DialogTriggerView-CNNSjuof.js";import"./Overlay-8PPtxL-z.js";import"./ButtonView-BRFdUSD4.js";import"./Heading-DtjPUsAn.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

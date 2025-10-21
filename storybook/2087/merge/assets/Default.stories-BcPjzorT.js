import{j as r}from"./iframe-DwkHntCQ.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-CscgxAB5.js";import{L as s}from"./Link-D97UElYb.js";import{H as m}from"./HeaderNavigation-CiOvzyok.js";import{B as o}from"./Button-DN4_LEM9.js";import{T as p}from"./Text-DBgNVic9.js";import{I as h}from"./Image-DouymOMf.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CMtlEgDg.js";import{C as M,M as c}from"./MenuItem-uhEfH2Qi.js";import{C as I}from"./ContextMenuTrigger-BAl4pRWO.js";import"./ContextMenuSection-BIxoue0C.js";import{a as T,M as k}from"./Modal-BBHmduNN.js";import{H}from"./Heading-BH424ajP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./context-BkqugFd7.js";import"./utils-Di7WFWpe.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BCP8B4jj.js";import"./utils-BgD92WZP.js";import"./useFocus-GoSUCcJ3.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./dynamic-A00wcWEh.js";import"./LoadingSpinner-Bd24wSd4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BrfRNilt.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./useLabel-DPc8RWv0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./Text-BtFh1iC6.js";import"./AlertIcon-DKibw3us.js";import"./Action-BTZgUlHV.js";import"./context-DyX3upIJ.js";import"./useStatic-BqeeL3zA.js";import"./getActionGroupSlot-HBCgi1hX.js";import"./Popover-DvylaOgQ.js";import"./useOverlayController-Dk9bMBr8.js";import"./OverlayContextProvider-DEtKF3P2.js";import"./Dialog-Cj1dv_FM.js";import"./RSPContexts-CHr_tkrx.js";import"./OverlayArrow-BCGgH0Vq.js";import"./useControlledState-DyDKUpf4.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";import"./VisuallyHidden-CVpyzdGa.js";import"./ClearPropsContextView-CxP4Y2-5.js";import"./ClearPropsContext-D7-qaIYX.js";import"./Switch-DmiDY_rx.js";import"./useFieldComponent-DTLstJQQ.js";import"./react-children-utilities-C8UOdL4T.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-e4U3WnWM.js";import"./useToggleState-BEOY8P1v.js";import"./useFormReset-BUY4HIau.js";import"./OverlayTrigger-Dz-k30Wm.js";import"./ControlledNotification-B20ejBs1.js";import"./DialogTriggerView-CIpO0wl_.js";import"./Overlay-nwqA1Nwt.js";import"./ButtonView-DVdQseSU.js";import"./Heading-8J-pRNKz.js";const Kr={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(m,{"aria-label":"Header navigation",...a,children:[r.jsx(s,{href:"#",children:"Getting startet"}),r.jsx(s,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(m,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Qr as __namedExportsOrder,Kr as default};

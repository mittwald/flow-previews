import{j as r}from"./iframe-BoA7YzYm.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-Cm4x5FHH.js";import{L as m}from"./Link-CWHnrTIN.js";import{H as s}from"./HeaderNavigation-DlEn9GMt.js";import{B as o}from"./Button-BKFimoLG.js";import{T as p}from"./Text-Dcujjsgx.js";import{I as h}from"./Image-CZmdwuUD.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-nU7e8ZWQ.js";import{C as M,M as c}from"./MenuItem-CZmGUGUO.js";import{C as I}from"./ContextMenuTrigger-C3SW7oKC.js";import"./ContextMenuSection-CVwpYLx9.js";import{a as T,M as k}from"./Modal-BpkeBPh4.js";import{H}from"./Heading-gW7z3NjW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./index-C8IfwtBf.js";import"./remote-W2BsjsJq.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./context-Bl3IUlM5.js";import"./utils-CbCfmbCJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-VWzB255U.js";import"./useFocus-0w8IxMP9.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./dynamic-DYpyzP7H.js";import"./LoadingSpinner-CJmPD5N7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./useLabel-BJjmJvn4.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser--2iaZute.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./Text-DzES3Axw.js";import"./AlertIcon-Cq_v5HPU.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./useStatic-BAyQxveA.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./Popover-tixea_gI.js";import"./useOverlayController-DTpdZrop.js";import"./OverlayContextProvider-CUahq4yj.js";import"./Dialog-BDOoN61w.js";import"./RSPContexts-D0KJsdCX.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./VisuallyHidden-ulLndJxN.js";import"./Switch-3O19pOIK.js";import"./useFieldComponent-DkEUVrE8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-wU1PKsEf.js";import"./useFormReset-Lf5kfq5Z.js";import"./OverlayTrigger-sv_J9YIM.js";import"./DialogTriggerView-CnW4EWnN.js";import"./Overlay-CfccPZX5.js";import"./ButtonView-K50G0lcC.js";import"./Flex-C2JPO3h_.js";import"./Heading-BxB-LiTB.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};

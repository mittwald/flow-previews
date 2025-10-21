import{j as r}from"./iframe-CPZmCQj-.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-BHYwQlMQ.js";import{L as m}from"./Link-CogEYAX9.js";import{H as s}from"./HeaderNavigation-BFFC4QZh.js";import{B as o}from"./Button-CO0ZKbGC.js";import{T as p}from"./Text-cGw-MBFK.js";import{I as h}from"./Image-CaHw91WP.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BPB3ZEEI.js";import{C as M,M as c}from"./MenuItem-B0niEcq2.js";import{C as I}from"./ContextMenuTrigger-CC_b7EJi.js";import"./ContextMenuSection-Dto6kOnn.js";import{a as T,M as k}from"./Modal-CryW_9V9.js";import{H}from"./Heading-CTnOUdED.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./utils-DbTuSxgD.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./dynamic-C0WBJwRj.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLjAzLtk.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./useLabel-DeJHfKxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./AlertIcon-B7P7Rebb.js";import"./Action-C3sEJruT.js";import"./context-7pI23nLQ.js";import"./useStatic-BEtxpUKF.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./Popover-B5_3Py3v.js";import"./useOverlayController-DCVLgcvS.js";import"./OverlayContextProvider-Bz_eXqqG.js";import"./Dialog-DJw1jmu7.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./ClearPropsContext-DZV6h8aR.js";import"./Switch-DWBf4OAI.js";import"./useFieldComponent-ZdrCImE8.js";import"./react-children-utilities-BpPrmtLj.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BIcdpqxH.js";import"./useToggleState-CgU4ubbL.js";import"./useFormReset-BZ0LqTvh.js";import"./OverlayTrigger-Cze0ok7i.js";import"./ControlledNotification-EmmTuegF.js";import"./DialogTriggerView-D5-PWRoF.js";import"./Overlay-BvR5tikF.js";import"./ButtonView-BmTwnybw.js";import"./Heading-3nGV8T5A.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

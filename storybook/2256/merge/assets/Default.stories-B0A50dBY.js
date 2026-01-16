import{j as r}from"./iframe-W1iyoXhf.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-Cnnsa5dA.js";import{L as m}from"./Link-BoIZb-Mx.js";import{H as s}from"./HeaderNavigation-D5vLd0p-.js";import{B as o}from"./Button-IzhK2U-6.js";import{T as p}from"./Text-DcDEk3cp.js";import{I as h}from"./Image-GOW5uX9s.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C3c586bK.js";import{C as M,M as c}from"./ContextMenu-B6M1HUST.js";import{C as I}from"./ContextMenuTrigger-Cqh-K55E.js";import"./ContextMenuSection-DWjrG_wk.js";import{a as T,M as k}from"./Modal-CuyUGW6A.js";import{H}from"./Heading-CkZ0B9ED.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./remote-CbMcOagV.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./context-Dx3ASvxi.js";import"./utils-Co92dFN-.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DwtcUURT.js";import"./useFocus-BF1azJZZ.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./dynamic-X2nPVSXv.js";import"./LoadingSpinner-BMAt0-EL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./useLabel-C8GMPbyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D1HYvIQy.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./AlertIcon-Cyqu-_3z.js";import"./Switch-DOYknjs6.js";import"./useFieldComponent-CeQ6dqWY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CpoCoou-.js";import"./useFormReset-DYb2_5Lx.js";import"./useControlledState-BeXX8b-c.js";import"./VisuallyHidden-9GsfRhh1.js";import"./Dialog-Dwmqa2yo.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./Action-BaKsvCHV.js";import"./context-Cx4Tf49f.js";import"./useStatic-DFE9WV1t.js";import"./getActionGroupSlot-nARO-zR5.js";import"./Popover-ZTnfTngx.js";import"./useOverlayController-BLagNJVD.js";import"./OverlayContextProvider-CtixpOlY.js";import"./OverlayTrigger-CDdGESRy.js";import"./DialogTriggerView-Bxcqtq7a.js";import"./Overlay-Cm4rNBC9.js";import"./ButtonView-DeVNGu_o.js";import"./Flex-T_AzYEVU.js";import"./Heading-DW_b7ElP.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

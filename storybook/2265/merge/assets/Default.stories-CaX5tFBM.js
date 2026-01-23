import{j as r}from"./iframe-CG_BDTJg.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-OVzy7qXj.js";import{L as m}from"./Link-BK3BTJiC.js";import{H as s}from"./HeaderNavigation--CX7DmJ4.js";import{B as o}from"./Button-BmAaiuIV.js";import{T as p}from"./Text-DpPZns_R.js";import{I as h}from"./Image-io6TxKwN.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DEsTz9he.js";import{C as M,M as c}from"./ContextMenu-C_dU7v4I.js";import{C as I}from"./ContextMenuTrigger-BS-ZTfO9.js";import"./ContextMenuSection-BjTcX3F7.js";import{a as T,M as k}from"./Modal-B8zOdMUy.js";import{H}from"./Heading--5M_y3tK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./index-CuwL1_wd.js";import"./remote-B2NguZ9L.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./context-CXt1SSmQ.js";import"./utils-BtbDMhcr.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./dynamic-CvnWp_K2.js";import"./LoadingSpinner-DTxDKIsL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./useLabel-DI7piRsn.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-yLu0BSsR.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./AlertIcon-y6uiAF7a.js";import"./Switch-q2OI3qdH.js";import"./useFieldComponent-UHV4FB79.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DFeoOqJ_.js";import"./useFormReset-BbxWwIqr.js";import"./useControlledState-BP00jBlc.js";import"./VisuallyHidden-pR1kpoR7.js";import"./Dialog-CMl17GR5.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./Action-CprlfWDd.js";import"./context-CBhRRwo5.js";import"./useStatic-CTCSTBly.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./Popover-C0DY4f9z.js";import"./useOverlayController-t3_U_UCZ.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./OverlayTrigger-DFacS4RO.js";import"./DialogTriggerView-BmA5-fyL.js";import"./Overlay-Bm_qR_F5.js";import"./ButtonView-D1nbgbts.js";import"./Flex-CfN_PP1D.js";import"./Heading-BH9BsmNO.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

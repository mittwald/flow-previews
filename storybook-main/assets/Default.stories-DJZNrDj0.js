import{j as r}from"./iframe-CKZ3lvbD.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-C7p1kK8i.js";import{L as m}from"./Link-3yz_UhBK.js";import{H as s}from"./HeaderNavigation-TxU_vHnj.js";import{B as o}from"./Button-CJlIPsW5.js";import{T as p}from"./Text-C_6aanp2.js";import{I as h}from"./Image-3twuDj3M.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D1ycV9-I.js";import{C as M,M as c}from"./MenuItem-CaFbHoBA.js";import{C as I}from"./ContextMenuTrigger-B32nQfaz.js";import"./ContextMenuSection-Dgn4oNc5.js";import{a as T,M as k}from"./Modal-B6QVKg1O.js";import{H}from"./Heading-BKtZSdLW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./index-4RPaTPNn.js";import"./remote-CtPArtkt.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./context-C9x0o2NL.js";import"./utils-BvJRIsTz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C_IvCZ_Q.js";import"./usePress-BdqAXD8t.js";import"./useFocusRing-BEfvRwzV.js";import"./useFocusable-C7EwfmGM.js";import"./dynamic-BOUQFyUk.js";import"./LoadingSpinner-D6ABJv6G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BHDMacWQ.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./useLabel-GmF_fUr4.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-burL9SPa.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./Text-CCMj3K8Y.js";import"./AlertIcon-DDOfYHUc.js";import"./Action-BaMcPQM3.js";import"./context-Ca4O4Dr-.js";import"./useStatic-B8hmur2r.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./Popover-BaFxU9kE.js";import"./useOverlayController-CXRFu3Cx.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./Dialog-C-Rr13fs.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useControlledState-DyEi02IX.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./Switch-C8YlnaND.js";import"./useFieldComponent-sXfPOyeP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D6mU9Ul-.js";import"./useFormReset-C_HfEwX8.js";import"./OverlayTrigger-C1yyJzXM.js";import"./DialogTriggerView-C3l-2Kzw.js";import"./Overlay-CqRKsDPP.js";import"./ButtonView-DfeKjjgQ.js";import"./Flex-MY998INc.js";import"./Heading-DdSm2kzR.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

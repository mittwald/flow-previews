import{j as r}from"./iframe-HxmydubW.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-C9xwJqAl.js";import{L as m}from"./Link-otQh8KUZ.js";import{H as s}from"./HeaderNavigation-BlDKi8Cz.js";import{B as o}from"./Button-CfZWs4w7.js";import{T as p}from"./Text-CUJOJiDD.js";import{I as h}from"./Image-C5yUK0KE.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BbAtdfTe.js";import{C as M,M as c}from"./MenuItem-zkJNXfI0.js";import{C as I}from"./ContextMenuTrigger-6_7qmb3j.js";import"./ContextMenuSection-DBGHgVvh.js";import{a as T,M as k}from"./Modal-CwveonQA.js";import{H}from"./Heading-C9JwdE7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./index-CEuE-GZL.js";import"./remote-fubbDoJI.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./context-CAIZZp13.js";import"./utils-QtLN3P4K.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-AF-IcVAt.js";import"./usePress-yluX3X-J.js";import"./useFocusRing-CAJt6BJw.js";import"./useFocusable-H6SSWU_B.js";import"./dynamic-D7w-3Mi4.js";import"./LoadingSpinner-CzIk11gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B_Zn8gpO.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./useLabel-CkTRhQb0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-XpDtWA4a.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./AlertIcon-BFPz9yZd.js";import"./ActionBatch-ChYSHCOJ.js";import"./context-I_ID-Cd_.js";import"./useStatic-ffXkYFOn.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./Popover-Dc_4CAsZ.js";import"./useOverlayController-CICFPSY8.js";import"./OverlayContextProvider-e8rtjnFo.js";import"./Dialog-BZeO2Xjo.js";import"./RSPContexts-Cjdg_leM.js";import"./OverlayArrow-CRirkybg.js";import"./useControlledState-N-j6hnQm.js";import"./Collection-Dh0U_T2u.js";import"./CollectionBuilder-DZvSqS6p.js";import"./SelectionIndicator-dYnAwztx.js";import"./Separator-D3qRtCTd.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./useCollator-qjE4hkog.js";import"./FocusScope-D_FLL8Ht.js";import"./VisuallyHidden-BPW-z4K2.js";import"./Switch-CBAxDBE4.js";import"./useFieldComponent-Bahj-THY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BE0q7bB3.js";import"./useFormReset-C2bi11DR.js";import"./OverlayTrigger-DvKHyWhH.js";import"./DialogTriggerView-Cva6KGJJ.js";import"./Overlay-52RCbHxn.js";import"./ButtonView-BtepizEV.js";import"./Flex-CvtRgXrX.js";import"./Heading-B7f00fHt.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

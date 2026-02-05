import{j as r}from"./iframe-DdPUg3l1.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CBjvo3Bl.js";import{L as m}from"./Link-DPd8jzda.js";import{H as s}from"./HeaderNavigation-CO4f3_Ju.js";import{B as o}from"./Button-BArDp6jY.js";import{T as p}from"./Text-DjGrgiDc.js";import{I as h}from"./Image-BRC1soQB.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bou1AGyP.js";import{C as M,M as c}from"./MenuItem-zp1Hx9Zq.js";import{C as I}from"./ContextMenuTrigger-D6sfCNzc.js";import"./ContextMenuSection-CdzHr0DY.js";import{a as T,M as k}from"./Modal-BrbThaIe.js";import{H}from"./Heading-L1WE8Mc-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./remote-C_Lvi_2k.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./context-eo9HPzgD.js";import"./utils-CZc2hRnH.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DOBDf5za.js";import"./usePress-C4aurJT7.js";import"./useFocusRing-B1QHji0w.js";import"./useFocusable-Dd42TuHo.js";import"./dynamic-nfXH0DAB.js";import"./LoadingSpinner-CrAIHNN2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CezSw_uu.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./useLabel-DfTMKk9x.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CdIpgqNn.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Text-JRLUlLnO.js";import"./AlertIcon-PzDvVuZo.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./Popover-MzjGOrse.js";import"./useOverlayController-CNjuPWf4.js";import"./OverlayContextProvider-CWnaXv7P.js";import"./Dialog-B4itYT93.js";import"./RSPContexts-DWbGf7NE.js";import"./OverlayArrow-CejAifjZ.js";import"./useControlledState-vD92hbDx.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./VisuallyHidden-DYHUXKrU.js";import"./Switch-DQXjapA9.js";import"./useFieldComponent-CO5pYfeq.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ByPOsgAA.js";import"./useFormReset-B7Z_bYQn.js";import"./OverlayTrigger-Dxt_ykXt.js";import"./DialogTriggerView-DsjI-Iar.js";import"./Overlay-q2PZAkmm.js";import"./ButtonView-BofU8H8L.js";import"./Flex-CMBKsRbv.js";import"./Heading-Daf4DLe6.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

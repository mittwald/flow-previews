import{j as r}from"./iframe-DQkRMfo_.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-D2qqMRrO.js";import{L as m}from"./Link-OZkk74Cu.js";import{H as s}from"./HeaderNavigation-ChPg4PVZ.js";import{B as o}from"./Button-CTuc7Sb1.js";import{T as p}from"./Text-DZXogYJp.js";import{I as h}from"./Image-DihR5W5v.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BzesQfiP.js";import{C as M,M as c}from"./MenuItem-BB8iYXfJ.js";import{C as I}from"./ContextMenuTrigger-DO5VZIhA.js";import"./ContextMenuSection-CK2JeTTJ.js";import{M as T}from"./ModalTrigger-DFfXsfep.js";import{M as k}from"./Modal-CJ5SZ1IH.js";import{H}from"./Heading-fqnL9RrB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./remote-CkmXCgJk.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./context-XfcuIoVT.js";import"./utils-Bfb5K-41.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BSyQYzHK.js";import"./usePress-D8-KGEPi.js";import"./useFocusRing-CrR0o1Yj.js";import"./useFocusable-BWtjl4YZ.js";import"./dynamic-Bf6rAVHb.js";import"./LoadingSpinner-BfuFQdyU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqHvWFWe.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./useLabel-BKmqgaQh.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BnHwZVCd.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Text-BXxFgtol.js";import"./AlertIcon-x4dcgk_u.js";import"./ActionBatch-CnbeSwOL.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./Popover-C2Sm0PAA.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./Dialog-cFet4L4X.js";import"./RSPContexts-Bk8qKDL5.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./VisuallyHidden-CreEQc-P.js";import"./Switch-CIfDdHE2.js";import"./useFieldComponent-DKGKIVkH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BXYT-WIx.js";import"./useFormReset-CbTvEeV3.js";import"./OverlayTrigger-0AVD2RuP.js";import"./DialogTriggerView-NvpN5dRX.js";import"./Overlay-Z1E506pH.js";import"./ButtonView-CdT4dZVW.js";import"./Flex-DdCAiEkA.js";import"./Heading-CDc2BCk7.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

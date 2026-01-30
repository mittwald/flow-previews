import{j as r}from"./iframe-BIoFjWpr.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-EC1k16Yv.js";import{L as m}from"./Link-BGJm99bT.js";import{H as s}from"./HeaderNavigation-D7V5yUL8.js";import{B as o}from"./Button-60lZfz3H.js";import{T as p}from"./Text-Dw86EjFX.js";import{I as h}from"./Image-B9mk24SH.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BMJTp6ty.js";import{C as M,M as c}from"./MenuItem-a-3C4lBX.js";import{C as I}from"./ContextMenuTrigger-5cWzwjt3.js";import"./ContextMenuSection-D04Tf7Yh.js";import{a as T,M as k}from"./Modal-CEYElucE.js";import{H}from"./Heading-CdczJAyy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./remote-CdlQwHLV.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./utils-DZ7CVsEQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CQPopARV.js";import"./usePress-Uox4pFjd.js";import"./useFocusRing-C05eNqGk.js";import"./useFocusable-CwNae-cD.js";import"./dynamic-BzebB2lX.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./useLabel-CIJOcLbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BAGCYS_p.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./AlertIcon-CufExgwJ.js";import"./Action-CpJIOnVf.js";import"./context-Bujl8L45.js";import"./useStatic-BOUdEr4J.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./Popover-BZLukQkr.js";import"./useOverlayController-OHHrE_gT.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./Dialog-khxuiED6.js";import"./RSPContexts-TtAa_5CI.js";import"./OverlayArrow-BK2hFoQS.js";import"./useControlledState-A9PECuda.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./VisuallyHidden-iLNm3MD9.js";import"./Switch-B5lnfzB8.js";import"./useFieldComponent-DpF862rt.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cq-zvn-S.js";import"./useFormReset-DTiYdK4X.js";import"./OverlayTrigger-DP9QTZiV.js";import"./DialogTriggerView-DulWE1ex.js";import"./Overlay-CPsfc_l9.js";import"./ButtonView-D8SKXTBC.js";import"./Flex-B1har50e.js";import"./Heading-DvZsP83m.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

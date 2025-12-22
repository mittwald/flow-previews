import{j as r}from"./iframe-DITmTDde.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-FbTim4wC.js";import{L as m}from"./Link-D_huAvzE.js";import{H as s}from"./HeaderNavigation-B0W-ZpzN.js";import{B as o}from"./Button-DgKZKMvA.js";import{T as p}from"./Text-B4ALgTL8.js";import{I as h}from"./Image-CbpbMegv.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CBge5GYQ.js";import{C as M,M as c}from"./MenuItem-CTC75U-2.js";import{C as I}from"./ContextMenuTrigger-2h6J5hH5.js";import"./ContextMenuSection-Dk8lBhMu.js";import{a as T,M as k}from"./Modal-C92Qkf2T.js";import{H}from"./Heading-BikOeUcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./index-oEm39XqO.js";import"./remote-BYAMMrVX.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./context-CEC4U_pc.js";import"./utils-C40myb20.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Cwz_fpS2.js";import"./useFocus-DrnrNdFb.js";import"./useFocusRing-DXc99t-B.js";import"./useFocusable-m8WXVW9y.js";import"./dynamic-BjimB01T.js";import"./LoadingSpinner-CQhA1l2h.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CsPSNcu1.js";import"./ProgressBar-DNk1ASVc.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./useLabel-DZbkZQ01.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-wgtkTybB.js";import"./EmulatedBoldText-CTBn_63u.js";import"./Text-rw4H23NJ.js";import"./AlertIcon-TRF3QsjZ.js";import"./Action-BJnGojjr.js";import"./context-fizPycLA.js";import"./useStatic-OoNPiP3V.js";import"./getActionGroupSlot-C8PBzZsA.js";import"./Popover-Zpv4dzR_.js";import"./useOverlayController-D0uk_tci.js";import"./OverlayContextProvider-4GqAJ6zk.js";import"./Dialog-Bmgfq9R9.js";import"./RSPContexts-jFJkk-mB.js";import"./OverlayArrow-CD7gdoFk.js";import"./useControlledState-D6UlgZp0.js";import"./Collection-CIVuuc0n.js";import"./CollectionBuilder-IVJxZg8U.js";import"./SelectionIndicator-711mCjj0.js";import"./Separator-BPOzmHFV.js";import"./SelectionManager-WdH-qHQg.js";import"./useEvent-CgJsVtlm.js";import"./useCollator-CsbGxztB.js";import"./FocusScope-zqNAAOXF.js";import"./VisuallyHidden-CcOPNtcw.js";import"./Switch-CuaAYE5d.js";import"./useFieldComponent-CR_sI6nz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Coy3HVEW.js";import"./useFormReset-vbhoemIT.js";import"./OverlayTrigger-D23x4NHr.js";import"./DialogTriggerView-BMdlNIXh.js";import"./Overlay-dRSFSid4.js";import"./ButtonView-CvbO9w1t.js";import"./Flex-D-vcLTYy.js";import"./Heading-DTo4uMVU.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

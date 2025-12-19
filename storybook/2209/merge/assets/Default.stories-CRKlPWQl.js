import{j as r}from"./iframe-bJ_6fidF.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-BRVy1IKm.js";import{L as m}from"./Link-Dn5sw_YH.js";import{H as s}from"./HeaderNavigation-NIrCluEp.js";import{B as o}from"./Button-BnsDuM8z.js";import{T as p}from"./Text-38_GgC7q.js";import{I as h}from"./Image-Dfd2_YGL.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DCSqPC8G.js";import{C as M,M as c}from"./MenuItem-C075oJsX.js";import{C as I}from"./ContextMenuTrigger-D4Rx0Ajo.js";import"./ContextMenuSection-CO0mnEOv.js";import{a as T,M as k}from"./Modal-Cqe2HNDb.js";import{H}from"./Heading-DKGadcRU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./index-DZS8fxXA.js";import"./remote-BGnMaeOw.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./context-BRobVGip.js";import"./utils-2JACcOpK.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DUWDHSym.js";import"./useFocus-DCEJi5pX.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./dynamic-B98QrFwh.js";import"./LoadingSpinner-Da58qKyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CFn0JrTH.js";import"./ProgressBar-B339qPNf.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./useLabel-DgCjbnqL.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CDYbiXXK.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./AlertIcon-CfVIHwZG.js";import"./Action-BNfya_PE.js";import"./context-CiNdmr3l.js";import"./useStatic-BZPvcAPs.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./Popover-SIfmV_cN.js";import"./useOverlayController-ChRaAOaJ.js";import"./OverlayContextProvider-CnhKGutL.js";import"./Dialog-DXm38-Rd.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";import"./Switch-CzdSkVu_.js";import"./useFieldComponent-uPh6Au6A.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D6cN2mOT.js";import"./useFormReset-nMFTazsC.js";import"./OverlayTrigger-DxVxjcsU.js";import"./DialogTriggerView-CZXurDVc.js";import"./Overlay-waH4PRie.js";import"./ButtonView-CeFFE66M.js";import"./Flex-wSxF1KxP.js";import"./Heading-Bbyv6ScP.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DB4UlQ_F.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-D6sMwWyV.js";import{L as m}from"./Link-2paQW1ed.js";import{H as s}from"./HeaderNavigation-DLSFkCgI.js";import{B as o}from"./Button-DYIAULzM.js";import{T as p}from"./Text-CvhufvNl.js";import{I as h}from"./Image-CmP1h6wq.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-z7IgWJ_K.js";import{C as M,M as c}from"./MenuItem-DCn1_OA4.js";import{C as I}from"./ContextMenuTrigger-CAHVW_ZA.js";import"./ContextMenuSection-BHyvjJMz.js";import{a as T,M as k}from"./Modal-BH0oLwQJ.js";import{H}from"./Heading-B71UuISa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./index-BSqJ1-JW.js";import"./remote-DOdcl-CB.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./context-BeH9c2u_.js";import"./utils-B6Q0cVYp.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CDGll4uD.js";import"./useFocus-mLt6Jcka.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./dynamic-CewJ3DJw.js";import"./LoadingSpinner-BUzKTNdb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-L-mN_PGj.js";import"./ProgressBar-BtSLHqLj.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./useLabel-bn4O9qyi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CMEWPYW9.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./AlertIcon-BN1UL3Xe.js";import"./Action-D44Jy6S7.js";import"./context-b0VtR6po.js";import"./useStatic-BsW-2tBw.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./Popover-C9bomiWQ.js";import"./useOverlayController-BTqpKE5m.js";import"./OverlayContextProvider-CZHDlMnp.js";import"./Dialog-B4nT46da.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./Switch-wfrPwUv2.js";import"./useFieldComponent-Dp69OqtL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-kc3vNB61.js";import"./useFormReset-zmgaZOpR.js";import"./OverlayTrigger-qoBp8HgP.js";import"./DialogTriggerView-Bqi3TrVl.js";import"./Overlay-DHoJvQSv.js";import"./ButtonView-DXPkNEhj.js";import"./Flex-74YQaMyE.js";import"./Heading-BIcTvsYt.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

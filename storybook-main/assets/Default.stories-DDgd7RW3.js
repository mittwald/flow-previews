import{j as r}from"./iframe-DzjGvN4s.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-s7NSVc-U.js";import{L as m}from"./Link-Bj886ruI.js";import{H as s}from"./HeaderNavigation-DcjM08wx.js";import{B as o}from"./Button-BJ_Dg9g5.js";import{T as p}from"./Text--QhKw61r.js";import{I as h}from"./Image-Cis1BPLW.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DhxBI8_s.js";import{C as M,M as c}from"./MenuItem-CHaxyT_F.js";import{C as I}from"./ContextMenuTrigger-CCB6d4ip.js";import"./ContextMenuSection-ehzNPOBV.js";import{a as T,M as k}from"./Modal-BhVWfxFS.js";import{H}from"./Heading-J6woGLR_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./remote-cWDQ0h3n.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./utils-CaY6-C_T.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DFbK7vZ5.js";import"./usePress-D3so-j8A.js";import"./useFocusRing-wMvVuuCP.js";import"./useFocusable-CvI9gOnC.js";import"./dynamic-D8j0vgwF.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./useLabel-7qQt_FP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DnRnaS9W.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./AlertIcon-C0w0dGgz.js";import"./Action-y81vuNMi.js";import"./context-_PoIYhJG.js";import"./useStatic-CvNWVJY5.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./Popover-nOmKsxoq.js";import"./useOverlayController-DZrr6Qr9.js";import"./OverlayContextProvider-kVoSIEPW.js";import"./Dialog-BxRkHkZu.js";import"./RSPContexts-D4WEG-B8.js";import"./OverlayArrow-k_B_Hrky.js";import"./useControlledState-DSekeTPZ.js";import"./Collection-BYckC4CV.js";import"./CollectionBuilder-60Hh4eJv.js";import"./SelectionIndicator-BO4ZIlru.js";import"./Separator-w2v2LtVY.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./useCollator-BxOUjI0N.js";import"./FocusScope-D_QyZTFZ.js";import"./VisuallyHidden-SzhNhvGP.js";import"./Switch-CLQT66wS.js";import"./useFieldComponent-BsZ1NoTf.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BO4Ko5O8.js";import"./useFormReset-lQZuuaDU.js";import"./OverlayTrigger-tWzhZuXD.js";import"./DialogTriggerView-DDfPzU9b.js";import"./Overlay-Dfa5nxml.js";import"./ButtonView-BBrehocd.js";import"./Flex-B8XD75Av.js";import"./Heading-DMPfqJKh.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

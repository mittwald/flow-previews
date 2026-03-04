import{j as r}from"./iframe-CwpToEZy.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BRui_VYo.js";import{L as m}from"./Link-UOTtvUV0.js";import{H as s}from"./HeaderNavigation-DeIN8VAg.js";import{B as o}from"./Button-Cw2xgR_6.js";import{T as p}from"./Text-DRk3V-Fm.js";import{I as h}from"./Image-G40l7j9A.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DMfxqN6s.js";import{C as M,M as c}from"./MenuItem-CYuM5Mgh.js";import{C as I}from"./ContextMenuTrigger-Ba9AK00Z.js";import"./ContextMenuSection-vq3x4ZL9.js";import{M as T}from"./ModalTrigger-EEyalueL.js";import{M as k}from"./Modal-09gASXkd.js";import{H}from"./Heading-BXHG1LZb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./index-G1voh-81.js";import"./remote-DRomu556.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./context-DWVDZDUv.js";import"./utils-3nROwXn_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BFSvAolX.js";import"./usePress-kUL6l53_.js";import"./useFocusRing-CJeIxJct.js";import"./useFocusable-ixEZOImu.js";import"./dynamic-CfOleVAa.js";import"./LoadingSpinner-CN3jmE_K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CuwTmUjn.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./useLabel-C-XdPLXI.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DhIaf7O7.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Text-Cb4d8n7F.js";import"./AlertIcon-DEQIepDy.js";import"./ActionBatch-DcvnwnMD.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./getActionGroupSlot-DtR43x--.js";import"./Popover-BSakkrK3.js";import"./OverlayContextProvider-CBORYkOm.js";import"./Dialog-CQ_DXP4m.js";import"./RSPContexts-DAz7wbZz.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";import"./Switch-CqYSsJsi.js";import"./useFieldComponent-CneqxYGw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Doj7UKiV.js";import"./useFormReset-BARG9uBg.js";import"./OverlayTrigger-Dh_IH1hG.js";import"./DialogTriggerView-D7Mk-aFM.js";import"./Overlay-B3hqAdST.js";import"./ButtonView-EQ3fadJN.js";import"./Flex-DxGhnD35.js";import"./Heading-CAz3skDU.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

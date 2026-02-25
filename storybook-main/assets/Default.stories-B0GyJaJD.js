import{j as r}from"./iframe-CAK8FS83.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-EFpx-Gs1.js";import{L as m}from"./Link-N8TmWUUa.js";import{H as s}from"./HeaderNavigation-DrIivQJf.js";import{B as o}from"./Button-itgufTCs.js";import{T as p}from"./Text-DLuRhlhH.js";import{I as h}from"./Image-BdrX5oKW.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BSGxcrTC.js";import{C as M,M as c}from"./MenuItem-BnW9Lg8D.js";import{C as I}from"./ContextMenuTrigger-DHcLaObj.js";import"./ContextMenuSection-gHmxmSmE.js";import{M as T}from"./ModalTrigger-C2gr8coE.js";import{M as k}from"./Modal-C0YYyFVW.js";import{H}from"./Heading-C00t5x9z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./remote-BiZ00o_J.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./utils-th26LVD6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CUz8YQ_V.js";import"./usePress-BYhFSapw.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./dynamic-D8OXR4zz.js";import"./LoadingSpinner-BC7xHqe0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./useLabel-uRe61yXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./AlertIcon-DLSo9NlW.js";import"./ActionBatch-BT7PEprG.js";import"./useOverlayController-Cgn9MX8W.js";import"./useStatic-CRQBoMuN.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./Popover-BcIzS5Zx.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./Dialog-Bg78UE4C.js";import"./RSPContexts-B_v10Iug.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./Switch-CVJT33-Q.js";import"./useFieldComponent-DkAI1nDB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState--Lsum0qS.js";import"./useFormReset-ClNM6Kah.js";import"./OverlayTrigger-YvJHasJp.js";import"./DialogTriggerView-DCUkf_nh.js";import"./Overlay-oKaaxmZR.js";import"./ButtonView-LoZK7xQ_.js";import"./Flex-CRH3-b1R.js";import"./Heading-CCBwW_g2.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

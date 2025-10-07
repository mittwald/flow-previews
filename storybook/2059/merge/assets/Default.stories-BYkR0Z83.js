import{j as r}from"./iframe-7dgBHkjI.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-CHzLfKjq.js";import{L as m}from"./Link-rF8V2HfC.js";import{H as s}from"./HeaderNavigation-D6x4okaW.js";import{B as o}from"./Button-C4xC-ENb.js";import{T as p}from"./Text-CPbpE1eA.js";import{I as B}from"./Image-Bk8AnGDK.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-9Zgj_pNk.js";import{C as y,M as c}from"./MenuItem-CKT6dgae.js";import{C as A}from"./ContextMenuTrigger-8aWh7jQM.js";import"./ContextMenuSection-P3ZBunxW.js";import{a as D,M as E}from"./Modal-BT_OI4Y-.js";import{H as G}from"./Heading-DA-R3l6v.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./index-DzRRQR_A.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./context-DLyAckLP.js";import"./utils-skLZq2rT.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-C40tO5Ld.js";import"./useFocus-BVcT7Cmq.js";import"./useFocusRing-DpIlZv5r.js";import"./useFocusable-CjOl0zdL.js";import"./dynamic-3ixFNiB4.js";import"./LoadingSpinner-BhdyCwx7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DA_owd3b.js";import"./ProgressBar-m_J970Ss.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BYuTkZ2t.js";import"./EmulatedBoldText-wnDp19Ns.js";import"./Text-CcEbIf7j.js";import"./AlertIcon-BGMOo4qZ.js";import"./Action-aBxNfjGZ.js";import"./context-CM0pxKNs.js";import"./useStatic-BofYKATW.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./Popover-CM6k8qzJ.js";import"./useOverlayController-Zz6_dm2l.js";import"./OverlayContextProvider-hM9hqaVX.js";import"./Dialog-RmwKLDR6.js";import"./RSPContexts-DU60rLWV.js";import"./OverlayArrow-CimrvBmG.js";import"./useControlledState-U7vX1g_u.js";import"./Collection-BoyNLLEq.js";import"./CollectionBuilder-BVEyhuGf.js";import"./context-CWPPwc3G.js";import"./Separator-zM5l-9RV.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./useCollator-aaYKjyL1.js";import"./FocusScope-iWt5Cohm.js";import"./VisuallyHidden-DxfkSq7z.js";import"./ClearPropsContextView-Dl-zrP-C.js";import"./Switch-B5KOCOSx.js";import"./useMakeFocusable-DAYaUZS_.js";import"./useToggleState-bZ2yV8iS.js";import"./useFormReset-DcXBOsyZ.js";import"./OverlayTrigger-B48aJ6SQ.js";import"./ControlledNotification-D2eg1ueK.js";import"./DialogTriggerView-3gOKq-i6.js";import"./Overlay-D-heCmBs.js";import"./ButtonView-BJxWnN6P.js";import"./Heading-C_3CsfJi.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};

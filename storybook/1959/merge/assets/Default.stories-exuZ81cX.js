import{j as r}from"./iframe-9NvHEEYX.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-BrSB4tEd.js";import{L as m}from"./Link-CVFAfQKC.js";import{H as s}from"./HeaderNavigation-Cb3Q9--4.js";import{B as o}from"./Button-DNkWV-Zy.js";import{T as p}from"./Text-DmCU-xjB.js";import{I as C}from"./Image-BPM7sOON.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DU6kOI9R.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BPbTuPEW.js";import"./ContextMenuSection-0a3H8mws.js";import{a as D,M as E}from"./Modal-Bkoz76an.js";import{H as G}from"./Heading-D_Pt2E9r.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./context-1WNE-E4a.js";import"./utils-phTOhdhB.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-B41vbTz8.js";import"./useFocus-D6PAQN6n.js";import"./useFocusRing-B-QDi9By.js";import"./useFocusable-B9Hhp3CR.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-8k09TVCC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BcHYciFT.js";import"./ProgressBar-OiyktaR6.js";import"./Label-BnOBL7z7.js";import"./Hidden-yLzo_Xn1.js";import"./useLabel-BM-ocsZo.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-bwKj2ElG.js";import"./EmulatedBoldText-D0lgjAwv.js";import"./Text-BvWwS3Z5.js";import"./AlertIcon-B2ECeuWU.js";import"./Action-DrNj8V5h.js";import"./context-BhkBgBm1.js";import"./useStatic-CR_xkm7d.js";import"./getActionGroupSlot-v3xFcxcI.js";import"./Popover-C5ED0s7q.js";import"./DialogTriggerView-ZMPabgU7.js";import"./Dialog-CIsBrKRV.js";import"./RSPContexts-C2QF7PgZ.js";import"./OverlayArrow-Csc6TqF8.js";import"./useControlledState-QTuKyMuz.js";import"./Collection-CLjZHuNo.js";import"./CollectionBuilder-BHg4Vaik.js";import"./Separator-CzXxLIRa.js";import"./Group-HJeSUD3y.js";import"./SearchField-BZ4AdFAe.js";import"./FieldError-osHXMSr-.js";import"./Form-Bv_h1ugL.js";import"./useTextField-DLSWgg2h.js";import"./useFormReset-CqIGJUAV.js";import"./TextField-CFZkN_yv.js";import"./useEvent-DCcWwaFm.js";import"./SelectionManager-Q48diFGT.js";import"./useCollator-BvoG3B46.js";import"./FocusScope-pZ9Wg3C8.js";import"./VisuallyHidden-BMUrvrGU.js";import"./Switch-BmVfJEIK.js";import"./Label-Bp2WajZU.js";import"./useToggleState-CO3ErD0a.js";import"./Overlay-BATOo1ir.js";import"./ButtonView-BJMyhAsn.js";import"./Heading-M61hX7dC.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};

import{j as r}from"./iframe-r2ISa6Vz.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DfNEkDa-.js";import{L as m}from"./Link-DqPKixsc.js";import{H as s}from"./HeaderNavigation-Cre3V4jS.js";import{B as o}from"./Button-MKxMP2k4.js";import{T as p}from"./Text-DXIJD_mG.js";import{I as C}from"./Image-Cip8MuE7.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DWbZpB_h.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BmrbLNsp.js";import"./ContextMenuSection-CV7sQIAK.js";import{a as D,M as G}from"./Modal-BK8I7GgD.js";import{H as E}from"./Heading-m3kJy3BZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNwGty8-.js";import"./mergeRefs-D4TwGOEw.js";import"./index-CwWOZNJb.js";import"./useLocalizedStringFormatter-D6_Bns5v.js";import"./context-AXeZ-4C7.js";import"./utils-DwHpNHaD.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CIA34O1p.js";import"./useFocus-De90M8h7.js";import"./useFocusRing-Dm8SMHzX.js";import"./useFocusable-BHAsUzIM.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BAfbRjK8.js";import"./Button-B3sV0uoO.js";import"./ProgressBar-BIuQEpdf.js";import"./Label-D9vBeQ72.js";import"./Hidden-3Y5hF2-9.js";import"./useLabel-C31-NaD3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-vniJOv6A.js";import"./EmulatedBoldText-DORQB6U8.js";import"./Text--yGrToJ3.js";import"./AlertIcon-j_JtrLPp.js";import"./Action-D78VW4nY.js";import"./context-B0bSHq_C.js";import"./useStatic-TtOui2SW.js";import"./getActionGroupSlot-B_TikFXZ.js";import"./Popover-Dq68QE1x.js";import"./DialogTriggerView-PP0jMcbF.js";import"./Dialog-BtlI13OW.js";import"./RSPContexts-BxS850vN.js";import"./OverlayArrow-DAzMh1Ha.js";import"./useControlledState-DWYZHaxy.js";import"./Collection-C-bKGm-J.js";import"./CollectionBuilder-DCMEaYz9.js";import"./Separator-1SYB0Oyv.js";import"./Group-DmvaYMW3.js";import"./SearchField-Cl7GqbCS.js";import"./FieldError-h_DzRRQi.js";import"./Form-BGPVVXS4.js";import"./useTextField-N_W8v2lE.js";import"./useFormReset-Cehr99bh.js";import"./TextField-CeohDO7l.js";import"./useEvent-B23TrCpv.js";import"./SelectionManager-BzHF4j0O.js";import"./useCollator-BnQV3F6v.js";import"./FocusScope-C4ChjLNl.js";import"./VisuallyHidden-DXZRkoBb.js";import"./Switch-CYp2TM6e.js";import"./Label-CqYrEG64.js";import"./useToggleState-BD-dggt1.js";import"./Overlay-DUody709.js";import"./ButtonView-CQw6_CKH.js";import"./Heading-C0VZeN9E.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};

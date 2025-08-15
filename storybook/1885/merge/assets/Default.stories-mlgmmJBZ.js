import{j as r}from"./iframe-Bcy3WBLD.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-Vd06CvkA.js";import{L as m}from"./Link-CwQa0yvB.js";import{H as s}from"./HeaderNavigation-DKjKfEmO.js";import{B as o}from"./Button-D1gTYi2b.js";import{T as p}from"./Text-BKZvU2Ep.js";import{I as C}from"./Image-Cx_8meBk.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C7429iyt.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BqYjjRqz.js";import"./ContextMenuSection-52REy7iR.js";import{a as D,M as G}from"./Modal-Dnpi6riM.js";import{H as E}from"./Heading-ClpaIzsq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHhLw24a.js";import"./mergeRefs--VvJilNx.js";import"./index-DVYl39IU.js";import"./useLocalizedStringFormatter-DL2ol0cr.js";import"./context-COJrQ54s.js";import"./utils-DWRY5rRS.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CA9PIUpq.js";import"./useFocus-Dgw0vV32.js";import"./useFocusRing-C3pUQ5cb.js";import"./useFocusable-C_MY2EQ_.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CH6ajn32.js";import"./Button-j-dhdB0v.js";import"./ProgressBar-DOzZ26z9.js";import"./Label-mUSxsxBX.js";import"./Hidden-Dv6inJmm.js";import"./useLabel-DJG08svr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CGdqZmLM.js";import"./EmulatedBoldText-LLb9cW4a.js";import"./Text-B9FmTM8Z.js";import"./AlertIcon-B7YFJDKs.js";import"./Action-CzlrQ86v.js";import"./context-BOV0Rbpo.js";import"./useStatic-D4VOD2iQ.js";import"./getActionGroupSlot-C7hTmbc4.js";import"./Popover-BBFOwcYX.js";import"./DialogTriggerView-txSV1TrO.js";import"./Dialog-D3iEa7Qs.js";import"./RSPContexts-Bts87vXR.js";import"./OverlayArrow-C5shyw1z.js";import"./useControlledState-gINmRHbE.js";import"./Collection-CRHqEzPy.js";import"./CollectionBuilder-BpdNBb0a.js";import"./Separator-BMBwVh1p.js";import"./Group-CKjDXA5J.js";import"./SearchField-uTJdbFFf.js";import"./FieldError-l-G1_SjF.js";import"./Form-PJgehRtv.js";import"./useTextField-KFIXFoXA.js";import"./useFormReset-COOu3OXz.js";import"./TextField-OZ5xDcTU.js";import"./useEvent-Bt8sVsIM.js";import"./SelectionManager-VjBSS0Z5.js";import"./useCollator-sTarHb1o.js";import"./FocusScope-DTvTpHKs.js";import"./VisuallyHidden-B7epvPUM.js";import"./Switch-COrh9FJY.js";import"./Label-BjUMecpn.js";import"./useToggleState-x8eAMuaS.js";import"./Overlay-BVle9Oxd.js";import"./ButtonView-CSKaOYQd.js";import"./Heading-DjN4O-Uz.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

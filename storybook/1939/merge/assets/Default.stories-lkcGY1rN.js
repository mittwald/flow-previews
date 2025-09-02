import{j as r}from"./iframe-h8pIb5Kv.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-sarICh-8.js";import{L as m}from"./Link-CI5J91MC.js";import{H as s}from"./HeaderNavigation-C4LWDJDM.js";import{B as o}from"./Button-BCd5wwjT.js";import{T as p}from"./Text-BnbJhuWd.js";import{I as C}from"./Image-DpXjBdfs.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-nbXNFksQ.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DWGhpNNr.js";import"./ContextMenuSection-BHRqy7hA.js";import{a as D,M as E}from"./Modal-DiwgqXTB.js";import{H as G}from"./Heading-Ctyu0gzH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./context-pcAEe7OC.js";import"./utils-Cexs4pbb.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BeaeLWhg.js";import"./useFocus-B-etxL-K.js";import"./useFocusRing-7BAVz6YI.js";import"./useFocusable-CAY1QTdY.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-D0_GuOvu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CV7XsWAw.js";import"./ProgressBar-BoBEJuQ0.js";import"./Label-BakLPZbA.js";import"./Hidden-Dc9Kv2au.js";import"./useLabel-DzpD0Vg0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-f0s2BEP-.js";import"./EmulatedBoldText-D5nLjsiS.js";import"./Text-DqGJg9Bh.js";import"./AlertIcon-BDYnP1Ja.js";import"./Action-gSATwLl0.js";import"./context-BoMfRFQo.js";import"./useStatic-DDG80hCS.js";import"./getActionGroupSlot-e-XHpWMr.js";import"./Popover-D6TQHQrt.js";import"./DialogTriggerView-CVy2Q8IW.js";import"./Dialog-C9-zvFsT.js";import"./RSPContexts-Cd0V4yxa.js";import"./OverlayArrow-DnTwsWqb.js";import"./useControlledState-BXC3uZfW.js";import"./Collection-jwpUx6pV.js";import"./CollectionBuilder-CLrwyJlT.js";import"./Separator-CedZax0a.js";import"./Group-DyQYlV1N.js";import"./SearchField-Pbcm1Prj.js";import"./FieldError-DvcRcsU3.js";import"./Form-Cc9esAZh.js";import"./useTextField-661dC4d6.js";import"./useFormReset-BL-bWUrE.js";import"./TextField-BlHsJIwz.js";import"./useEvent-KXd4In2f.js";import"./SelectionManager-ClbqTV3I.js";import"./useCollator-CMfRCWJM.js";import"./FocusScope-CkC1yDzC.js";import"./VisuallyHidden-CByVy45C.js";import"./Switch-C7OeQYS8.js";import"./Label-B99siZxZ.js";import"./useToggleState-CsYHRDa6.js";import"./Overlay-C5Dao-iK.js";import"./ButtonView-CVjF9T33.js";import"./Heading-YCD57lb1.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BwL5TE8j.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CFzxGyJP.js";import{L as m}from"./Link-DsmtdHqi.js";import{H as s}from"./HeaderNavigation-DTVeMLbe.js";import{B as o}from"./Button-aac4MlcR.js";import{T as p}from"./Text-DGokGAz6.js";import{I as C}from"./Image-BrWPm7lK.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-ClupXUnr.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DVBhRKZ7.js";import"./ContextMenuSection-Ug__qdSH.js";import{a as D,M as E}from"./Modal-DH7zRqsM.js";import{H as G}from"./Heading-CfBpJMd-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./context-CLDbs9sm.js";import"./utils-D5K6eLjb.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-H2LW6Ly5.js";import"./useFocus-B2onYDnw.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocusable-DDKZ0z65.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-xuWixoMH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJbpMApz.js";import"./ProgressBar-BqBMnQMD.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./useLabel-0Q5rWqkC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BFoEGF9u.js";import"./EmulatedBoldText-C4JMZ2uF.js";import"./Text-lZrUqOdv.js";import"./AlertIcon-BG5Z1N9t.js";import"./Action-Dz3okKrM.js";import"./context-CPjnFp9f.js";import"./useStatic-lPJ6-trN.js";import"./getActionGroupSlot-D5WSPsgm.js";import"./Popover-yYGh9Pu-.js";import"./DialogTriggerView-Cn2CtqME.js";import"./Dialog-CAhtHN7d.js";import"./RSPContexts-twmoior-.js";import"./OverlayArrow-ClAfltY8.js";import"./useControlledState-B8vyFbA3.js";import"./Collection-D-rOi4Fm.js";import"./CollectionBuilder-BSKAEL2-.js";import"./Separator-BewLs59G.js";import"./Group-DtaLpYpv.js";import"./SearchField-D9OSv9aH.js";import"./FieldError-sKqByAl8.js";import"./Form-GeiXMdXB.js";import"./useTextField-B_NtZtsZ.js";import"./useFormReset-BObq63rv.js";import"./TextField-CoIF75G6.js";import"./useEvent-CsEmoHY2.js";import"./SelectionManager-DjWaGKUE.js";import"./useCollator-BVjT8-HM.js";import"./FocusScope-BNA3YsCO.js";import"./VisuallyHidden-kWjY9XjT.js";import"./Switch-D0zBfXdh.js";import"./Label-DWj4cilU.js";import"./useToggleState-BmROClgr.js";import"./Overlay-Bi37yfcP.js";import"./ButtonView-BV1bIRN0.js";import"./Heading-KvETIO-A.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

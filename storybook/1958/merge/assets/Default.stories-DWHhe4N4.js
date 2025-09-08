import{j as r}from"./iframe-BAzLYubM.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-C8vW1cGr.js";import{L as m}from"./Link-Cot2seqI.js";import{H as s}from"./HeaderNavigation-BegWiPOy.js";import{B as o}from"./Button-DJgbNtOP.js";import{T as p}from"./Text-CjPbBUZt.js";import{I as C}from"./Image-sbJLqYfz.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DjL0x5bU.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BnzknarY.js";import"./ContextMenuSection-BClLLEdS.js";import{a as D,M as E}from"./Modal-hvDnObxd.js";import{H as G}from"./Heading-CohMeiqD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./context-dTk8Xbgu.js";import"./utils-b3dZQxDg.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DP_wKln7.js";import"./useFocus-DNlriqLN.js";import"./useFocusRing-BpLfAbDy.js";import"./useFocusable-B5cC5QAy.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BkZn8ran.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DEcgbODe.js";import"./ProgressBar-B6A5wRyw.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./useLabel-Fj3twa-e.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CzeCNbOa.js";import"./EmulatedBoldText-saOgMaUw.js";import"./Text-BrSTDiHS.js";import"./AlertIcon-UOTSNg8x.js";import"./Action-CEiZST8d.js";import"./context-Cca8XENB.js";import"./useStatic-Ck2rgCkC.js";import"./getActionGroupSlot-wdi100NC.js";import"./Popover-Bfr7_pQf.js";import"./DialogTriggerView-MnquLDuj.js";import"./Dialog-CNBL61sA.js";import"./RSPContexts-DL_RbNY6.js";import"./OverlayArrow-DVbPN0at.js";import"./useControlledState-Ca8ITVoa.js";import"./Collection-CQV8aK6u.js";import"./CollectionBuilder-B31VuGbq.js";import"./Separator-CRdY-Wkq.js";import"./Group-C36tMHps.js";import"./SearchField-DJpeDF7e.js";import"./FieldError-CY1AiRgy.js";import"./Form-VFHeLX6B.js";import"./useTextField-9L1zHPzc.js";import"./useFormReset-BLDHXQeI.js";import"./TextField-RDj9bqu6.js";import"./useEvent-zmd_ZeyS.js";import"./SelectionManager-CYYX1vob.js";import"./useCollator-BFbm-Er3.js";import"./FocusScope-Bn06IbqX.js";import"./VisuallyHidden-sQyJVZKI.js";import"./Switch-Cezph9tQ.js";import"./Label-D53E6W3R.js";import"./useToggleState-W5Qpoqo9.js";import"./Overlay-B1oAjTYQ.js";import"./ButtonView-DGAZrxvC.js";import"./Heading-crohW3Dr.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

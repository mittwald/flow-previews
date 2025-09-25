import{j as r}from"./iframe-DSMxFmCo.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-BVk6tlGE.js";import{L as m}from"./Link-D0xcpw-3.js";import{H as s}from"./HeaderNavigation-Cl5yOUxT.js";import{B as o}from"./Button-B4iADtHJ.js";import{T as p}from"./Text-D_0LfN4x.js";import{I as C}from"./Image-D2OKb4Zd.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DT5Cxd6K.js";import{b as y,C as A,M as c}from"./ContextMenuSection-DgCSjc-k.js";import{a as D,M as E}from"./Modal-33fTMXW7.js";import{H as G}from"./Heading-5UcSZr4b.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./context-64LigRkb.js";import"./utils-V6gMnCgM.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CpWBfHNM.js";import"./useFocus-rqOLNBQE.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocusable-CWTiV4pp.js";import"./dynamic-BKY_zed6.js";import"./LoadingSpinner-DrTN5ZSN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-a5-NScD1.js";import"./ProgressBar-X6kaEndn.js";import"./Label-BX8mTcFT.js";import"./Hidden-D2GOYXns.js";import"./useLabel-CGRenFpR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-R7FwPwL5.js";import"./EmulatedBoldText-DCelI_Fa.js";import"./Text-CUE1Abh-.js";import"./AlertIcon-BFcWnAaT.js";import"./Action-BWiQvpwE.js";import"./context-eOFRYD3C.js";import"./useStatic-Bf1fNjch.js";import"./getActionGroupSlot-DXwV-t9Z.js";import"./Popover-JtzXSHjL.js";import"./DialogTriggerView-CRRade0J.js";import"./RSPContexts-yTBIWgKj.js";import"./ClearPropsContextView-DgWNLgLQ.js";import"./useControlledState-Bd9qDCZc.js";import"./FocusScope-DaPMN8_C.js";import"./useCollator-CouZLuEw.js";import"./VisuallyHidden-D9pE8D_t.js";import"./Collection-BjFS4X2Q.js";import"./CollectionBuilder-Csq46UyD.js";import"./context-n-efbKpz.js";import"./Separator-BzacB-Ho.js";import"./SelectionManager-DnqUUNzH.js";import"./useEvent-CC0ROtua.js";import"./Switch-BIdyu98b.js";import"./Label-BPw_TKwN.js";import"./useToggleState-D35b7CDH.js";import"./useFormReset-BfhIxfM0.js";import"./Overlay-CS7AYEbP.js";import"./ButtonView-BABbJnWM.js";import"./Heading-Bt4IwNny.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};

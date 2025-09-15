import{j as r}from"./iframe-Ddl3oy7j.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-c_EtJYHN.js";import{L as m}from"./Link-DxuNuccD.js";import{H as s}from"./HeaderNavigation-CVLbKmUq.js";import{B as o}from"./Button-DqaKYKf3.js";import{T as p}from"./Text-QWoB1dLM.js";import{I as C}from"./Image-B06lGPE9.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BfFnb9in.js";import{a as y,C as A,M as c}from"./ContextMenuContent-QBJrce9E.js";import"./ContextMenuSection-wvBBY48w.js";import{a as D,M as E}from"./Modal-BEnzkQMs.js";import{H as G}from"./Heading-CIxDrxL5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnW5HdO8.js";import"./mergeRefs-C9z6gsFG.js";import"./index-C1skfeMg.js";import"./useLocalizedStringFormatter-CALAZrAH.js";import"./context-DO4TRSlT.js";import"./utils-Ci_tygJf.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CocvpA_Y.js";import"./useFocus-DmoZ0prk.js";import"./useFocusRing-BmS0Hu73.js";import"./useFocusable-Czgc212e.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CMgBxs5g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtXFMSeo.js";import"./ProgressBar-DxjBV5HR.js";import"./Label-3HbXpuHu.js";import"./Hidden-ywj4FOpy.js";import"./useLabel-DcZpZe32.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-bNZZs8J3.js";import"./EmulatedBoldText-CxwJM-M1.js";import"./Text-sFlu2MbQ.js";import"./AlertIcon-CHpw4pRs.js";import"./Action-DUd3tSxu.js";import"./context-CodLc8vz.js";import"./useStatic-CuoXAQeJ.js";import"./getActionGroupSlot-Ceebw4du.js";import"./Popover-VwLdfteC.js";import"./DialogTriggerView-d2hqROxE.js";import"./Dialog-BWiPBE7M.js";import"./RSPContexts-DkASzfG8.js";import"./OverlayArrow-BcGuja2I.js";import"./useControlledState-CmfVHeBq.js";import"./Collection-CvGKQDYH.js";import"./CollectionBuilder-B4jSBOCT.js";import"./Separator-C6XPVHs3.js";import"./Group-DIPAAm7c.js";import"./SearchField-DspYPOuY.js";import"./FieldError-DKHffRep.js";import"./Form-BuMmY0ok.js";import"./useTextField-FYLvyiMg.js";import"./useFormReset-DqrIwWOQ.js";import"./TextField-WM0IMQR5.js";import"./useEvent-DmjLh1yy.js";import"./SelectionManager-Dg6K_iw1.js";import"./useCollator-B4sklduu.js";import"./FocusScope-xkAre9m0.js";import"./VisuallyHidden-D1ge_fMG.js";import"./Switch-5xVq-eEa.js";import"./Label-CPFqIdaY.js";import"./useToggleState-nCB6LYTR.js";import"./Overlay-DsOF3dlY.js";import"./ButtonView-BQXRKEzJ.js";import"./Heading-C93AsN8G.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

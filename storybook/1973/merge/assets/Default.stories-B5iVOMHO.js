import{j as r}from"./iframe-DvGStSYQ.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-PCMncW0h.js";import{L as m}from"./Link-zvNuQUgJ.js";import{H as s}from"./HeaderNavigation-DGSnoH9t.js";import{B as o}from"./Button-DjKTL3-y.js";import{T as p}from"./Text-aqY_knFC.js";import{I as C}from"./Image-Dq6nOQL3.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CX0YFjd0.js";import{a as y,C as A,M as c}from"./ContextMenuContent-De8H8__8.js";import"./ContextMenuSection-BLWfrl0H.js";import{a as D,M as E}from"./Modal-CCGUJ39Q.js";import{H as G}from"./Heading-CcAer-3o.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./context-AtsIIwtl.js";import"./utils-BfKSOXmh.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-i0ws38c9.js";import"./useFocus-Dk72H1bO.js";import"./useFocusRing-ldGrbWty.js";import"./useFocusable-51csEq1k.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-KPhGKvxN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSYAfZ7k.js";import"./ProgressBar-BElErXd2.js";import"./Label-BsSwZl9V.js";import"./Hidden-D8kwZn2S.js";import"./useLabel-pezwcoCn.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B7JgWknh.js";import"./EmulatedBoldText-CaZEOFKE.js";import"./Text-C8nQapVu.js";import"./AlertIcon-cai6D9wi.js";import"./Action-BWXqzLSl.js";import"./context-Cq3VHa6C.js";import"./useStatic-DiIM3txy.js";import"./getActionGroupSlot-S1WVYHYX.js";import"./Popover-CSEwrymH.js";import"./DialogTriggerView-BbgRv1Oa.js";import"./Dialog-CYVeUmsI.js";import"./RSPContexts-Dwdml_ht.js";import"./OverlayArrow-Cm-qLoTT.js";import"./useControlledState-BCrcM4bM.js";import"./Collection-C-BG6Vrm.js";import"./CollectionBuilder-DHXYJDan.js";import"./Separator-dZEiMybe.js";import"./Group-BlAVBLoF.js";import"./SearchField-BP1Cyyuc.js";import"./FieldError-Cv8C3-Ec.js";import"./Form-BeVzvFPG.js";import"./useTextField-Su4XsVqq.js";import"./useFormReset-CpcIO9Ob.js";import"./TextField-DaGxzBCI.js";import"./useEvent-P2zKSTCT.js";import"./SelectionManager-CRcC2iB_.js";import"./useCollator-CtQygjZr.js";import"./FocusScope-Dv52udGl.js";import"./VisuallyHidden-BQiIpSgJ.js";import"./Switch-CNGey8mA.js";import"./Label-DhM8XMbl.js";import"./useToggleState-CKOCyluT.js";import"./Overlay-Dbp-_jzd.js";import"./ButtonView-DvuJFS4m.js";import"./Heading-Cluu2882.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

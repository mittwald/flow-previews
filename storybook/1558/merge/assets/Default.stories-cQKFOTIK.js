import{j as r}from"./iframe-QjFTiyQe.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-I1gVfg4d.js";import{L as m}from"./Link-D-LDFCDO.js";import{H as s}from"./HeaderNavigation-iPdrBq6d.js";import{B as o}from"./Button-DswPXoPV.js";import{T as p}from"./Text-BZfLsL9o.js";import{I as C}from"./Image-Cr48Q4uz.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BzsD7_vU.js";import{b as y,C as A,M as c}from"./ContextMenuSection-JoLTQJFC.js";import{a as D,M as E}from"./Modal-CGHjqsh2.js";import{H as G}from"./Heading-B7tG6tmq.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./context-CTF16ofK.js";import"./utils-r8e_N1jc.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CnoQHIlJ.js";import"./useFocus-CRsfU1Oq.js";import"./useFocusRing-xi6RBNRG.js";import"./useFocusable-D3z6GPZp.js";import"./dynamic-BXiQW-1E.js";import"./LoadingSpinner-DWbOqfQP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Czs8nreM.js";import"./ProgressBar-gZUBqeyg.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./useLabel-BzcwXIx3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CetGLHjc.js";import"./EmulatedBoldText-B1qs5w8y.js";import"./Text-C66hVS57.js";import"./AlertIcon-C4_np_LO.js";import"./Action-qyNGi_Md.js";import"./context-Be1upz9q.js";import"./useStatic-Dq12R2u8.js";import"./getActionGroupSlot-BezXTqeU.js";import"./Popover-B3H4bpbb.js";import"./DialogTriggerView-nOYLeOX3.js";import"./RSPContexts-D-dV82T_.js";import"./ClearPropsContextView-BPsPBjo2.js";import"./useControlledState-Dx1OInf3.js";import"./FocusScope-zGp-W5qB.js";import"./useCollator-CVr4ya_1.js";import"./VisuallyHidden-YhvwkWEW.js";import"./Collection-CqUJc8bm.js";import"./CollectionBuilder-D_prnUUR.js";import"./context-BV634MuB.js";import"./Separator-C2SfW9_n.js";import"./SelectionManager-Da7BobSD.js";import"./useEvent-C1lgvXKS.js";import"./Switch-DhT8Adyz.js";import"./Label-poB2Yhtj.js";import"./useToggleState-DlGoB95j.js";import"./useFormReset-BGTclNvs.js";import"./Overlay-Cr5w_mnT.js";import"./ButtonView-BbPG4M9r.js";import"./Heading-CKgYV3oq.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

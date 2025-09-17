import{j as r}from"./iframe-Fj9rH4cM.js";import{y as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-BqHcxRer.js";import{L as m}from"./Link-C3OrqR7q.js";import{H as s}from"./HeaderNavigation-D425TSAF.js";import{B as o}from"./Button-CRDs1G82.js";import{T as p}from"./Text-CY4-u4so.js";import{I as C}from"./Image-BVFL_vWl.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Q_BPEBFW.js";import{b as y,C as A,M as c}from"./ContextMenuSection-5NRem_tB.js";import{a as D,M as E}from"./Modal-JR7rYy_z.js";import{H as G}from"./Heading-B7USTBmU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./context-qP4IgOj6.js";import"./utils-1iPQLSxY.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CXUdxwPb.js";import"./useFocus-7HBUp4O0.js";import"./useFocusRing-CKWUlu0I.js";import"./useFocusable-DA60a4RB.js";import"./dynamic-BaCFTb0P.js";import"./LoadingSpinner-CK8GFOt2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClJ-El1M.js";import"./ProgressBar-BwsJFvfU.js";import"./Label-BqD1zatE.js";import"./Hidden-Duc9NbhT.js";import"./useLabel-C-3cKpbA.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-VEiFSO1p.js";import"./EmulatedBoldText-Ctpzt0x1.js";import"./Text-DCFUXQ-H.js";import"./AlertIcon-31cWnv3d.js";import"./Action-TpguNNPB.js";import"./context-qzo6W5cX.js";import"./useStatic-g6Dny9ho.js";import"./getActionGroupSlot-DSTuqm6f.js";import"./Popover-BFsrpBdt.js";import"./DialogTriggerView-cCV2n8WK.js";import"./RSPContexts-CZftLSNz.js";import"./OverlayArrow-DopxGRGn.js";import"./useControlledState-DkD4o1Gz.js";import"./FocusScope-ComN1xIG.js";import"./useCollator-Cv7Z6Bqm.js";import"./VisuallyHidden-6EX0wPu2.js";import"./Collection-DVpJlKDB.js";import"./CollectionBuilder-82bN8UBR.js";import"./Separator-B_gkWTuC.js";import"./Group-DdYjb3kh.js";import"./SearchField-DV7b6fGA.js";import"./FieldError-Dx-XJATE.js";import"./Form-OtjI-dAW.js";import"./useTextField-CyljbYW8.js";import"./useFormReset-D9GIYNIc.js";import"./TextField-HFN8OYQm.js";import"./useEvent-UTIdhTs4.js";import"./SelectionManager-Cy5yrTgT.js";import"./Switch-DNXGLBBh.js";import"./Label-gqfIXoZt.js";import"./useToggleState-Dv36yU8m.js";import"./Overlay-HaHYnsf6.js";import"./ButtonView-BE_aIrSg.js";import"./Heading-DqU28Gla.js";const Ur={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Vr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Vr as __namedExportsOrder,Ur as default};

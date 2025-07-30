import{j as r}from"./iframe-DJR6bG_N.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-TBIhG4gU.js";import{L as m}from"./Link-DGN9pghd.js";import{H as s}from"./HeaderNavigation-eWbyUUY9.js";import{B as o}from"./Button-BcHxSHOm.js";import{T as p}from"./Text-CxYW3yHX.js";import{I as C}from"./Image-AeQECv6Q.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DHsXM_Ag.js";import{a as y,C as A,M as c}from"./ContextMenuContent-tLDaGYGA.js";import"./ContextMenuSection-B_2BSOIl.js";import{a as D,M as G}from"./Modal-CnNeu951.js";import{H as E}from"./Heading-BkblK8MO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BL9cdq29.js";import"./mergeRefs-Hpx63azc.js";import"./index-C22qm2g8.js";import"./useLocalizedStringFormatter-DqMJYvZV.js";import"./context-DgBdWYay.js";import"./utils-DRP6LXVD.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CnK8r-az.js";import"./useFocus-BcpzqQNe.js";import"./useFocusRing-CfOOnzfL.js";import"./useFocusable-BEA6ccjd.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BP8XYJb-.js";import"./Button-C47dkwdH.js";import"./ProgressBar-B9rixrKR.js";import"./Label-sZvCZMuk.js";import"./Hidden-BHSOAXCo.js";import"./useLabel-DhfP4m7A.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B_AF4VAW.js";import"./EmulatedBoldText-DOjRM7Xy.js";import"./Text-BqN-_O45.js";import"./AlertIcon-CbbRGoI3.js";import"./Action-DUsQfaLv.js";import"./context-tBw8Lqjb.js";import"./useStatic-CIf-dq2E.js";import"./getActionGroupSlot-CudkwBxb.js";import"./Popover-DLNqBLfZ.js";import"./DialogTriggerView-DkospgpI.js";import"./Dialog-B2WyxH4W.js";import"./RSPContexts-DiuHitS7.js";import"./OverlayArrow-Dty9UTNu.js";import"./useControlledState-CYpB0MkV.js";import"./Collection-Bn5uLIdX.js";import"./CollectionBuilder-Kei65M9q.js";import"./Separator-43LoEa0E.js";import"./Group-CE0iASVZ.js";import"./SearchField-CR0mUJzd.js";import"./FieldError-Cb0gzYqD.js";import"./Form-BkELhqZm.js";import"./useTextField-CXWfURMQ.js";import"./useFormReset-DJO_Tyel.js";import"./TextField-CZNDqobz.js";import"./useEvent-SSoNVoxa.js";import"./SelectionManager-DV-un0OH.js";import"./useCollator-CQl6CZ5b.js";import"./FocusScope-nXLL4j6O.js";import"./VisuallyHidden-Capsm3hZ.js";import"./Switch-CySWzKzs.js";import"./Label-43dyzUgI.js";import"./useToggleState-B0lcAoQO.js";import"./Overlay-BYA03Cp1.js";import"./Header-CA2x3_WK.js";import"./ButtonView-DrQygQjN.js";import"./Heading-BJxiU0-g.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};

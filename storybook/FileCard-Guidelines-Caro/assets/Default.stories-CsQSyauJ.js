import{j as r}from"./iframe-BDw0JWSR.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-C4ko8TBx.js";import{L as m}from"./Link-CpDGchsy.js";import{H as s}from"./HeaderNavigation-PZxHIP9x.js";import{B as o}from"./Button-yu20EEPl.js";import{T as p}from"./Text-BXVMRRcn.js";import{I as C}from"./Image-BNsNxnxl.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-aAQJUVLv.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CHJx8hEQ.js";import"./ContextMenuSection-CwVQtv9j.js";import{a as D,M as G}from"./Modal-CWgU0ina.js";import{H as E}from"./Heading--VU7n6P6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlgeDM1_.js";import"./mergeRefs-C1Ne00pv.js";import"./index-DchPcGun.js";import"./useLocalizedStringFormatter-CacwBwR0.js";import"./context-D5nQNM7t.js";import"./utils-D_w6CRD2.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BNZPQqcG.js";import"./useFocus-Dj2Ek65f.js";import"./useFocusRing-52GqPzGX.js";import"./useFocusable-D3-cRXek.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CFe72iUG.js";import"./Button-lKZFx-Lr.js";import"./ProgressBar-CyYOn_uf.js";import"./Label-CUqrwqQ8.js";import"./Hidden-pH7w6Mtj.js";import"./useLabel-C5kEgDfJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BofL4XsS.js";import"./EmulatedBoldText-BcRlLsEq.js";import"./Text-DEFEolTP.js";import"./AlertIcon-Skxsda4x.js";import"./Action-BixN79Ov.js";import"./context-DDduvggu.js";import"./useStatic-D7eirymu.js";import"./getActionGroupSlot-CeAfv5DI.js";import"./Popover-BDeGicz_.js";import"./DialogTriggerView-5dEI7enB.js";import"./Dialog-D8b2kpaQ.js";import"./RSPContexts-0zkktiyR.js";import"./OverlayArrow-CwRuRLsS.js";import"./useControlledState-Cvl_BVXS.js";import"./Collection-DDNNYOGK.js";import"./CollectionBuilder-DuESWRb0.js";import"./Separator-Cydo87Fk.js";import"./Group-CKyiWQ2U.js";import"./SearchField-DqNeviEu.js";import"./FieldError-ByToyRq3.js";import"./Form-Q2KPI748.js";import"./useTextField-qrm6HsnU.js";import"./useFormReset-JMYigv_3.js";import"./TextField-DXLuZ0kd.js";import"./useEvent-Cw4Az-S_.js";import"./SelectionManager-CoRWAbK4.js";import"./useCollator-DLoPjsqn.js";import"./FocusScope-CC9BsQaO.js";import"./VisuallyHidden-BSZ5GesV.js";import"./Switch-D8593Smf.js";import"./Label-Be_-w5vU.js";import"./useToggleState-BsVkpmMa.js";import"./Overlay-BRhvQYut.js";import"./Header-Bbb4yl4m.js";import"./ButtonView-D2cB3Af-.js";import"./Heading-DfvBFGtB.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

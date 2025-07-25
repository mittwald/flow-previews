import{j as r}from"./iframe-BBx9-gCC.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-47GPuUwW.js";import{L as m}from"./Link-2j6OoWyU.js";import{H as s}from"./HeaderNavigation-gfeHRlZY.js";import{B as o}from"./Button-Ddotms0d.js";import{T as p}from"./Text-BRZqhCt6.js";import{I as C}from"./Image-Dat152dN.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CbYPGcOt.js";import{a as D,C as y,M as c}from"./ContextMenuContent-BXEWctvn.js";import"./ContextMenuSection-BFwPoVa8.js";import{a as A,M as G}from"./Modal-CQYvWemB.js";import{H as E}from"./Heading-CjnzzP7a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./context-Ck7bCMhf.js";import"./utils-SrU--Gh3.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Dpgdsh2n.js";import"./useFocus-BXsHwCAW.js";import"./useFocusRing-D6klBOWk.js";import"./useFocusable-D4Fl883K.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-AZclZqAu.js";import"./Button-L3SI-iJl.js";import"./ProgressBar-CJ4YAGIN.js";import"./Label-CVor_bqX.js";import"./Hidden-BTXZmZLy.js";import"./useLabel-CF_pOETX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Bo5IRxBw.js";import"./EmulatedBoldText-BvDF2M3d.js";import"./Text--Ew1YFd1.js";import"./AlertIcon-CbYeSYGw.js";import"./Action-BVJDTfB3.js";import"./context-Dom9sQ0K.js";import"./useStatic-BS_If2Fg.js";import"./getActionGroupSlot-C2w1KC4o.js";import"./Popover-CjCquK7b.js";import"./DialogTriggerView-D7E3O5i1.js";import"./Dialog-H4IcaOME.js";import"./RSPContexts-JH7zjLDh.js";import"./OverlayArrow-B_GGjq9s.js";import"./useControlledState-DddH35UQ.js";import"./Collection-cumDjP4P.js";import"./CollectionBuilder-B9aud2Z5.js";import"./Separator-BwGnbFHF.js";import"./Input-BKE4e8rI.js";import"./SearchField-CFDyyBZS.js";import"./FieldError-CQ-c_qp9.js";import"./Form-DewizsXc.js";import"./Group-BE3jiUC2.js";import"./useTextField-Sw__XDSo.js";import"./useFormReset-dy85Q4T2.js";import"./TextField-D1wRIDn_.js";import"./SelectionManager-Jj460orM.js";import"./useEvent-CbTJhmHg.js";import"./useCollator-CBTsDb_F.js";import"./FocusScope-CSSHoYlT.js";import"./VisuallyHidden-DCQ3C4tW.js";import"./Switch-D3-f2FPR.js";import"./Label-CN6ALsUC.js";import"./useToggleState-B162DHyZ.js";import"./Overlay-GpYXO3f8.js";import"./Header-DG_pE_Jv.js";import"./ButtonView-V0Ilbtro.js";import"./Heading--tvq-06a.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};

import{j as r}from"./iframe-DkoDxfR2.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-Ck0HvR0Q.js";import{L as m}from"./Link-C3MdfYbf.js";import{H as s}from"./HeaderNavigation-D8u1EWid.js";import{B as o}from"./Button-Cp9hbBL4.js";import{T as p}from"./Text-CnS74kup.js";import{I as C}from"./Image-CoMIvc1d.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DKqNEO69.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DQ3UvTlq.js";import"./ContextMenuSection-BdY28UX7.js";import{a as D,M as G}from"./Modal-C0JkaG7X.js";import{H as E}from"./Heading-BOxKIZt8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./context-De-s_lIT.js";import"./utils-BOrYOV9F.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DxrgSCNh.js";import"./useFocus-Ca2dqt2u.js";import"./useFocusRing-BDB7k6Pq.js";import"./useFocusable-BICMmXOk.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-kZmvy7rj.js";import"./Button-DYTF7ZZs.js";import"./ProgressBar-D05nSwtV.js";import"./Label-DRKfcyWW.js";import"./Hidden-De8D6e53.js";import"./useLabel-BuM0FhpV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Bh7wweWi.js";import"./EmulatedBoldText-CUhPQfrL.js";import"./Text-Ctymnv7p.js";import"./AlertIcon-BOh2uqwn.js";import"./Action-Bcu2qL72.js";import"./context-92DLRHvs.js";import"./useStatic-DQBBioJh.js";import"./getActionGroupSlot-BidRnFe8.js";import"./Popover-BthwtJdm.js";import"./DialogTriggerView-CduBBth1.js";import"./Dialog-C4-038Ac.js";import"./RSPContexts-CqAwA2eB.js";import"./OverlayArrow-DZuWnV6Z.js";import"./useControlledState-JTLXT68E.js";import"./Collection-B9R2_Cw6.js";import"./CollectionBuilder-DALOaQAz.js";import"./Separator-CIHlVyAb.js";import"./Group-T6PFTdYn.js";import"./SearchField-z4vXhhfv.js";import"./FieldError-X-QluTji.js";import"./Form-CnPMOS5f.js";import"./useTextField-D0_dgvqT.js";import"./useFormReset-BbPVrHjA.js";import"./TextField-CLGPgbQU.js";import"./useEvent-C4SFAJBx.js";import"./SelectionManager-CvEqXULD.js";import"./useCollator-COoHYzT4.js";import"./FocusScope-DjWdfa-n.js";import"./VisuallyHidden-C20fNH5S.js";import"./Switch-GpJPGzlW.js";import"./Label-XXLO5rpK.js";import"./useToggleState-CT2ie8rV.js";import"./Overlay-Do79nTN1.js";import"./Header-H0lTpRzA.js";import"./ButtonView-Bkm4GMrq.js";import"./Heading-D_yR9HjO.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

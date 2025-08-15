import{j as r}from"./iframe-XU38G95a.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-C4sgFplx.js";import{L as m}from"./Link-DOp9cMFN.js";import{H as s}from"./HeaderNavigation-CZLY6lQL.js";import{B as o}from"./Button-BRSF3HU2.js";import{T as p}from"./Text-BiCu62_D.js";import{I as C}from"./Image-B1vJgybq.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CnU4uX63.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CYP7NGyS.js";import"./ContextMenuSection-BC5uz-fg.js";import{a as D,M as G}from"./Modal-BkS5h2gV.js";import{H as E}from"./Heading-DBS9KkyH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./context-DoEtjPsM.js";import"./utils-CRMz2C-S.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DmxXsmze.js";import"./useFocus-BcwSg9Gz.js";import"./useFocusRing-_ts8IeVv.js";import"./useFocusable-bB4ldgF4.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BHQyVil0.js";import"./Button-DXKMbIig.js";import"./ProgressBar-B_1vEsN7.js";import"./Label-B-D8nJqg.js";import"./Hidden-CmYs0ax8.js";import"./useLabel-DWzTJ_60.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DzHUdCJ5.js";import"./EmulatedBoldText-DgdtlBmQ.js";import"./Text-BOldZPQm.js";import"./AlertIcon-Jrp23BH4.js";import"./Action-ak2exQl4.js";import"./context-C_3J_Isg.js";import"./useStatic-IEgx7F5P.js";import"./getActionGroupSlot-CNBLHpLc.js";import"./Popover-B2HVaTEw.js";import"./DialogTriggerView-C6cdj0HA.js";import"./Dialog-WotfotBD.js";import"./RSPContexts-Dggqaxhp.js";import"./OverlayArrow-DHjXAVGD.js";import"./useControlledState-D-ouz_Ia.js";import"./Collection-PyKyE3xx.js";import"./CollectionBuilder-BF5rDR9u.js";import"./Separator-DvLdq-tR.js";import"./Group-CaxTXUah.js";import"./SearchField-C9T5dJPC.js";import"./FieldError-iHvRLgo5.js";import"./Form-BwQPNTC6.js";import"./useTextField-DczSeHlH.js";import"./useFormReset-CGohrCOb.js";import"./TextField-OEkZHrb0.js";import"./useEvent-BbdxCe-3.js";import"./SelectionManager-C40pIXC_.js";import"./useCollator-C7gGvaqP.js";import"./FocusScope-ng_yE7d5.js";import"./VisuallyHidden-DU3qZR-S.js";import"./Switch-DwVjMOyT.js";import"./Label-ClqUqVil.js";import"./useToggleState-Bkk0UKaM.js";import"./Overlay-CJxUs4vC.js";import"./ButtonView-BlGKleuL.js";import"./Heading-DmSbkR1e.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};

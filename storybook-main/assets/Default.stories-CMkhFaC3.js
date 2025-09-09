import{j as r}from"./iframe-CW4eA9k4.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-D1jj5TJf.js";import{L as m}from"./Link-CKcJS3Hs.js";import{H as s}from"./HeaderNavigation-8P165Bi5.js";import{B as o}from"./Button-BjlFMLDb.js";import{T as p}from"./Text-Db3UCsEl.js";import{I as C}from"./Image-CSxmMcAi.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Bz2_Q01A.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CvkJkU9f.js";import"./ContextMenuSection-9hjVwN3o.js";import{a as D,M as E}from"./Modal-30ooY-OI.js";import{H as G}from"./Heading-ukkjVDjs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./context-DFsoEI_J.js";import"./utils-LQZW6rX9.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Du8ADkCR.js";import"./useFocus-rpK25HP0.js";import"./useFocusRing-O7qNIesH.js";import"./useFocusable-UDevydpZ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BE9DZA1q.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-LSmOeJqu.js";import"./ProgressBar-CmNSRDCs.js";import"./Label-Bbcp5SCN.js";import"./Hidden-DmXjFFnH.js";import"./useLabel-CsKDXT_H.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CS0dj8Dh.js";import"./EmulatedBoldText-Dbwzf73Y.js";import"./Text-CUI2zCQ5.js";import"./AlertIcon-B8J2qDX7.js";import"./Action-Bf9Z-Hza.js";import"./context-D5N2lUOa.js";import"./useStatic-DUg3iw8_.js";import"./getActionGroupSlot-vBeuxSBi.js";import"./Popover-BySWrKlF.js";import"./DialogTriggerView-VKpqTSm1.js";import"./Dialog-WgwS_B3t.js";import"./RSPContexts--2BkcUf2.js";import"./OverlayArrow-92dvWqKB.js";import"./useControlledState-Dx2k1uzE.js";import"./Collection-BBOAX0bv.js";import"./CollectionBuilder-COr3RMXa.js";import"./Separator-DG994JLx.js";import"./Group-dsIczUwA.js";import"./SearchField-uV4xHJex.js";import"./FieldError-DfDNH_Ov.js";import"./Form-Carw_-CN.js";import"./useTextField-Cdkp1LGI.js";import"./useFormReset-C1QC8NQi.js";import"./TextField-B9ZB3AOz.js";import"./useEvent-g2bJgFQA.js";import"./SelectionManager-c5mN7BQ-.js";import"./useCollator-DeJ4YmOD.js";import"./FocusScope-DDrNwogJ.js";import"./VisuallyHidden-DAkOZO38.js";import"./Switch-iXgJR371.js";import"./Label-BmbUI49G.js";import"./useToggleState-BOILe57A.js";import"./Overlay-BFXwVckk.js";import"./ButtonView-bLk6_MFs.js";import"./Heading-Bs47TW4c.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
